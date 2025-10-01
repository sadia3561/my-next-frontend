"use client";

import { useState } from "react";

// ----------------- Type Definitions -----------------
type ModuleNode = {
  name: string;
  children?: ModuleNode[];
  details?: {
    purpose?: string;
    primaryUsers?: string;
    stepByStepFlow?: string[];
    uiData?: string;
    apisEvents?: string;
    security?: string;
    acceptance?: string;
    edgeCases?: string;
  };
};

// ----------------- Modules Data -----------------
 
const modules: ModuleNode[] = [
  {
    name: "Identity & Access (IAM)",
    details: {
      purpose: "Secure, auditable access with role-based privileges and MFA.",
      primaryUsers:
        "ANI Super Admin, Client Admins, Vendor/Supplier Admins, Consultants, Transporters, Auditors.",
      stepByStepFlow: [
        "User sign up/invited by org admin → create org profile.",
        "Upload KYC docs automated checks (GSTIN, format) → admin verification queue.",
        "Admin approves assign role(s) & permissions.",
        "First login enforce MFA (SMS/email/authenticator).",
        "All actions logged to audit trail.",
      ],
      uiData:
        "Sign up, Org profile, KYC dashboard, Role management, Audit log. Data: User, Org, Role, Permission, Session, AuditEvent.",
      apisEvents:
        "POST/auth/register, POST/auth/login, POST/auth/mfa-setup, GET /admin/kyc-queue, events: user.created, user.verified.",
      security:
        "TLS, bcrypt/argon2, JWT session management, rate limiting, IP/rate protections, periodic credential rotation.",
      acceptance:
        "MFA for admin enabled; 100% critical actions audited; account compromise attempts < threshold.",
      edgeCases:
        "Lost MFA-verified recovery flow; shared accounts-enforce unique user accounts and audits.",
    },
  },
  {
    name: "Organization Management",
    details: {
      purpose: "Manage organization profiles, hierarchy, and related data.",
      primaryUsers: "ANI Super Admin, Client Admins.",
      stepByStepFlow: [
        "Create org profile → input legal & contact info.",
        "Assign admins and key contacts.",
        "Link projects and departments to org.",
        "Update org info → all changes logged.",
      ],
      uiData: "Org dashboard, profile pages, hierarchy view. Data: Org, Departments, Admins.",
      apisEvents: "POST/orgs, GET/orgs/{id}, PUT/orgs/{id}, events: org.created, org.updated.",
      security: "Role-based access, TLS, audit logs for all changes.",
      acceptance: "All org creations & updates logged, correct admin permissions applied.",
      edgeCases: "Duplicate orgs → validation; inactive admins → auto-alert.",
    },
  },
  {
    name: "Role Management",
    details: {
      purpose: "Define roles, assign permissions, enforce access control.",
      primaryUsers: "Org Admins, ANI Super Admin.",
      stepByStepFlow: [
        "Create roles → assign permissions.",
        "Assign roles to users or departments.",
        "Modify or revoke roles → audit trail updated.",
        "Periodic review of roles & access.",
      ],
      uiData: "Role dashboard, permission matrix, audit log. Data: Role, Permission, User.",
      apisEvents:
        "POST/roles, GET/roles, PUT/roles/{id}, DELETE/roles/{id}, events: role.created, role.updated.",
      security: "RBAC enforced, TLS, audit logging.",
      acceptance: "No unauthorized role assignments; periodic audit passed.",
      edgeCases:
        "Deleted role assigned to user → auto-remap; overlapping permissions → alert.",
    },
  },
  {
    name: "User Management",
    details: {
      purpose: "Handle user profiles, account lifecycle, and access.",
      primaryUsers: "Org Admins, ANI Super Admin.",
      stepByStepFlow: [
        "Invite user → registration link.",
        "User completes profile, optional KYC.",
        "Assign roles & permissions.",
        "Enable password reset, deactivate/reactivate account.",
        "Audit all profile changes.",
      ],
      uiData: "User list, profile page, activity log. Data: User, Role, Session, AuditEvent.",
      apisEvents: "POST/users/invite, GET/users, PUT/users/{id}, events: user.invited, user.updated.",
      security: "TLS, password hashing, RBAC, audit logging.",
      acceptance: "All profile changes logged, no unauthorized access.",
      edgeCases: "Duplicate emails → validation; user leaves org → deactivate account.",
    },
  },
  {
    name: "Consultants & Vendors",
    children: [
      {
        name: "Vendors Mgmt",
        details: {
          purpose: "Manage vendor profiles and onboarding.",
          primaryUsers: "Org Admins, Vendor Admins.",
          stepByStepFlow: [
            "Register vendor profile.",
            "Upload licenses/docs → verification.",
            "Assign vendor to projects/services.",
            "Audit all actions.",
          ],
          uiData: "Vendor dashboard, verification queue. Data: Vendor, Project, Services.",
          apisEvents: "POST/vendors, GET/vendors, events: vendor.registered, vendor.approved.",
          security: "TLS, RBAC, encrypted docs.",
          acceptance: "All vendors verified; actions logged.",
          edgeCases: "Unverified vendors → block; expired license → auto-alert.",
        },
      },
      {
        name: "Services Mgmt",
        details: {
          purpose: "Manage services offered by vendors/consultants.",
          primaryUsers: "Vendor Admins, Org Admins.",
          stepByStepFlow: [
            "Add services → attach documentation.",
            "Assign services to projects.",
            "Modify or archive services.",
            "Audit all actions.",
          ],
          uiData: "Service list, dashboard. Data: Service, Vendor, Project.",
          apisEvents: "POST/services, GET/services, PUT/services/{id}, events: service.added, service.updated.",
          security: "TLS, RBAC, audit logging.",
          acceptance: "All services tracked and auditable.",
          edgeCases: "Deprecated services → archive; conflicting assignments → alert.",
        },
      },
      {
        name: "Billing & Payments",
        details: {
          purpose: "Handle invoicing and payment tracking.",
          primaryUsers: "Finance Admins, Vendor Admins.",
          stepByStepFlow: [
            "Generate invoice → link to project/service.",
            "Send invoice → track payment.",
            "Receive payment → update ledger.",
            "Audit all transactions.",
          ],
          uiData: "Invoice dashboard, payment tracker. Data: Invoice, Payment, Vendor, Project.",
          apisEvents: "POST/invoices, GET/payments, events: invoice.created, payment.completed.",
          security: "TLS, secure payment gateways, audit logs.",
          acceptance: "No missed payments; all transactions auditable.",
          edgeCases: "Payment failure → retry; duplicate invoice → validation.",
        },
      },
      {
        name: "Products Mgmt",
        details: {
          purpose: "Manage vendor products and inventory.",
          primaryUsers: "Vendor Admins, Org Admins.",
          stepByStepFlow: [
            "Add product → attach documentation.",
            "Assign product to projects/clients.",
            "Modify or archive products.",
            "Audit all actions.",
          ],
          uiData: "Product dashboard, inventory list. Data: Product, Vendor, Project.",
          apisEvents: "POST/products, GET/products, PUT/products/{id}, events: product.added, product.updated.",
          security: "TLS, RBAC, audit logging.",
          acceptance: "All products tracked; actions logged.",
          edgeCases: "Deprecated products → auto-archive; conflicting assignments → alert.",
        },
      },
    ],
  },
  {
    name: "Audit & Compliance",
    details: {
      purpose: "Ensure system actions comply with policies and regulations.",
      primaryUsers: "Auditors, Compliance Officers, Admins.",
      stepByStepFlow: [
        "Track all user and admin actions.",
        "Generate compliance reports periodically.",
        "Alert on suspicious activity.",
        "Archive audit logs securely.",
      ],
      uiData: "Audit dashboard, report generator. Data: AuditEvent, User, Org, Role.",
      apisEvents: "GET/audit, POST/compliance-report, events: audit.logged, compliance.generated.",
      security: "Immutable logs, TLS, RBAC, encrypted storage.",
      acceptance: "100% critical actions logged; compliance reports generated.",
      edgeCases: "Log tampering attempt → alert; missing data → auto-retrieve.",
    },
  },
  {
    name: "Analytics & Metrics",
    children: [
      {
        name: "Reporting & Exports",
        details: {
          purpose: "Generate and export reports.",
          primaryUsers: "Admins, Auditors, Finance.",
          stepByStepFlow: [
            "Select report type → filters.",
            "Generate report → preview.",
            "Export to CSV/PDF.",
            "Store report for historical reference.",
          ],
          uiData: "Report generator, export options. Data: Project, Vendor, User, KPI.",
          apisEvents: "POST/reports, GET/reports/{id}, events: report.generated, report.exported.",
          security: "RBAC, TLS, audit logs.",
          acceptance: "All reports downloadable; history preserved.",
          edgeCases: "Failed export → retry; missing data → alert.",
        },
      },
      {
        name: "Dashboard KPI Views",
        details: {
          purpose: "Visualize KPIs and trends.",
          primaryUsers: "Admins, Project Managers.",
          stepByStepFlow: [
            "Configure dashboard widgets.",
            "Select KPIs to display.",
            "Refresh data in real-time.",
            "Monitor alerts and trends.",
          ],
          uiData: "Dashboard UI, widgets, KPI charts. Data: KPI, Project, Vendor, User.",
          apisEvents: "GET/dashboard, events: dashboard.updated.",
          security: "RBAC, TLS, read-only access for viewers.",
          acceptance: "Real-time data; accurate KPI visualization.",
          edgeCases: "Widget fails → fallback; missing KPI data → alert.",
        },
      },
    ],
  },
  {
    name: "Desktop Portals",
    details: {
      purpose: "Provide desktop access for admins and users.",
      primaryUsers: "Admins, Project Managers, Users.",
      stepByStepFlow: [
        "Login via desktop portal.",
        "Access assigned modules based on roles.",
        "Perform management tasks.",
        "Logout securely and session ends.",
      ],
      uiData: "Desktop portal UI, module navigation, dashboards. Data: User, Role, Session.",
      apisEvents: "POST/desktop-login, GET/modules, events: session.started, session.ended.",
      security: "TLS, MFA, session timeout, audit logging.",
      acceptance: "Secure desktop access; no unauthorized module access.",
      edgeCases: "Session expires → auto-logout; multiple logins → alert.",
    },
  },
];


// ----------------- Highlight Function -----------------
function highlightMatch(text: string, searchTerm: string) {
  if (!searchTerm) return text;
  const regex = new RegExp(`(${searchTerm})`, "gi");
  return text.split(regex).map((part, i) =>
    regex.test(part) ? <span key={i} className="bg-yellow-300">{part}</span> : part
  );
}

function TreeNode({ node, searchTerm }: { node: ModuleNode; searchTerm: string }) {
  const [open, setOpen] = useState(false);

  const matchesSearch = node.name.toLowerCase().includes(searchTerm.toLowerCase());
  const hasVisibleChild =
    node.children?.some(
      (child) =>
        child.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        child.children?.some((c) => c.name.toLowerCase().includes(searchTerm.toLowerCase()))
    ) ?? false;

  if (searchTerm && !matchesSearch && !hasVisibleChild) return null;

  return (
    <div className="ml-4 mt-2">
      <div
        className="cursor-pointer hover:text-blue-500 font-medium"
        onClick={() => setOpen(!open)}
      >
        {node.children && <span className="mr-1">{open ? "▼" : "▶"}</span>}
        {highlightMatch(node.name, searchTerm)}
      </div>

      {open && node.children &&
        node.children.map((child, idx) => (
          <TreeNode key={idx} node={child} searchTerm={searchTerm} />
        ))
      }

      {open && node.details && (
        <div className="ml-4 mt-1 text-sm bg-gray-50 p-2 rounded border">
          {node.details.purpose && <p><strong>Purpose:</strong> {highlightMatch(node.details.purpose, searchTerm)}</p>}
          {node.details.primaryUsers && <p><strong>Primary Users:</strong> {highlightMatch(node.details.primaryUsers, searchTerm)}</p>}
          {node.details.stepByStepFlow && (
            <div>
              <strong>Step-by-Step Flow:</strong>
              <ul className="list-disc ml-6">
                {node.details.stepByStepFlow.map((step, i) => <li key={i}>{highlightMatch(step, searchTerm)}</li>)}
              </ul>
            </div>
          )}
          {node.details.uiData && <p><strong>UI/Data:</strong> {highlightMatch(node.details.uiData, searchTerm)}</p>}
          {node.details.apisEvents && <p><strong>APIs/Events:</strong> {highlightMatch(node.details.apisEvents, searchTerm)}</p>}
          {node.details.security && <p><strong>Security:</strong> {highlightMatch(node.details.security, searchTerm)}</p>}
          {node.details.acceptance && <p><strong>Acceptance/KPI:</strong> {highlightMatch(node.details.acceptance, searchTerm)}</p>}
          {node.details.edgeCases && <p><strong>Edge Cases / Mitigation:</strong> {highlightMatch(node.details.edgeCases, searchTerm)}</p>}
        </div>
      )}
    </div>
  );
}

// ----------------- Main Component -----------------
export default function ModulesPage() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="p-4">
      {/* Images Section */}
      <div className="mb-6">
        <img src="/assets/hero-bg.jpg" alt="Hero Background" className="mb-4 w-full rounded" />
        <img src="/assets/hero-card.jpg" alt="Hero Card" className="mb-4 w-full rounded" />
        <img src="/assets/project1.jpg" alt="Project 1" className="mb-4 w-full rounded" />
      </div>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search modules..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border p-2 mb-4 w-full rounded"
      />

      {/* Modules Tree */}
      <div>
        {modules.map((module, idx) => (
          <TreeNode key={idx} node={module} searchTerm={searchTerm} />
        ))}
      </div>
    </div>
  );
}





























































