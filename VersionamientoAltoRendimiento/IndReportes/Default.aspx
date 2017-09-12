<%@ page language="C#" autoeventwireup="true" inherits="_Default, App_Web_gvb5ay52" %>

<%@ Register Assembly="Microsoft.ReportViewer.WebForms, Version=11.0.0.0, Culture=neutral, PublicKeyToken=89845dcd8080cc91" Namespace="Microsoft.Reporting.WebForms" TagPrefix="rsweb" %>
<%@ Register Src="~/Control/ctrMensaje.ascx" TagPrefix="uc1" TagName="ctrMensaje" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <link href="../Css/bootstrap.css" rel="stylesheet" />
</head>
<body>
    <form id="form1" runat="server">
        <div>
            <asp:ScriptManager ID="ScriptManager1" runat="server"></asp:ScriptManager>
            <uc1:ctrMensaje runat="server" ID="ctrMensaje" Visible="false" />
            <rsweb:ReportViewer ID="rptVisor" runat="server" Height="600px"
                ProcessingMode="Remote" ShowBackButton="True" ShowFindControls="False"
                ShowRefreshButton="True" Width="100%">
            </rsweb:ReportViewer>
        </div>
    </form>
</body>
</html>
