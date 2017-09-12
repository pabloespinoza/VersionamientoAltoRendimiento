<%@ control language="C#" autoeventwireup="true" inherits="ctrMensaje, App_Web_uzurzohw" %>

<div id="divInformacion" runat="server" CssClass="form-control input-sm">
    <div class="alert alert-info">
        <!-- Your content goes here -->
        <i class=" icon-info-sign "></i>
        <strong>Info: </strong>
        <asp:Label runat="server" ID="lblInformacion"></asp:Label>
        <button type="button" class="close" data-dismiss="alert">&times;</button>
    </div>
</div>
<div id="divExito" runat="server" CssClass="form-control input-sm">
    <div class="alert alert-success">
        <!-- Your content goes here -->
        <i class="icon-ok-circle "></i>
        <strong>Exito: </strong>
        <asp:Label runat="server" ID="lblExito"></asp:Label>
        <button type="button" class="close" data-dismiss="alert">&times;</button>
    </div>
</div>
<div id="divError" runat="server" CssClass="form-control input-sm">
    <div class="alert alert-danger">
        <!-- Your content goes here -->
        <i class="icon-exclamation-sign "></i>
        <strong>Error: </strong>
        <asp:Label runat="server" ID="lblError"></asp:Label>
        <button type="button" class="close" data-dismiss="alert">&times;</button>
    </div>
</div>
<div id="divAdvertencia" runat="server" CssClass="form-control input-sm">
    <div class="alert alert-warning">
        <!-- Your content goes here -->
        <i class="icon-warning-sign "></i>
        <strong>Advertencia: </strong>
        <asp:Label runat="server" ID="lblAdvertencia"></asp:Label>
        <button type="button" class="close" data-dismiss="alert">&times;</button>
    </div>
</div>
