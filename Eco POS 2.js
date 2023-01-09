
//Force this app to portrait mode.
cfg.Portrait

//Main class for the app
class Main extends App
{
    //Called when app starts.
    onStart()
    {
    		//Establecer tema en pruebas modo oscuro
    		ui.setTheme("dark")
    		ui.setThemeColor("#673ab7", "#81d4fa")
    		
        //Add main layout and set default child margins.
        this.layMain = ui.addLayout( "main", "linear", "fillxy" )
        this.layMain.setChildMargins( .02, .0, .02, .02 )
        
        //Crear barra de titulo
        this.apb = ui.addAppBar(this.layMain, "Eco POS", "static", 1)
        this.btnDescuentos = ui.addButton(this.apb.layout, "label", "icon")
        this.btnConfig = ui.addButton(this.apb.layout, "settings", "icon")
        
        //Crear Layout para botones ingresos/gastos
        this.layBotones = ui.addLayout(this.layMain, "linear", "horizontal, left, fillx")
        this.layBotones.setChildMargins( 0.02, 0.0, 0.02, 0.02 )
        
        //Crear boton ingresos
        this.nuevoIngreso = ui.addButton(this.layBotones, "Ingresos", "outline, large", 0.5)
        this.nuevoIngreso.icon = "monetization_on"
        this.nuevoIngreso.backColor = "#009688"
        this.nuevoIngreso.textColor = "#ffffff"
        
        //Crear boton gastoa
        this.nuevoGasto = ui.addButton(this.layBotones, "Gastos", "outline, large", 0.5)
        this.nuevoGasto.icon = "local_atm"
        this.nuevoGasto.backColor = "#d81b60"
        this.nuevoGasto.textColor = "#ffffff"
        
        //Crear borton de nueva venta
        this.nuevaVenta = ui.addButton(this.layMain, "Nueva venta", "outline, large", 0.96)
        this.nuevaVenta.icon = "shopping_cart"
        this.nuevaVenta.backColor = "#4caf50" 
        this.nuevaVenta.textColor = "#ffffff"
        
        //Mostrsr pedidos pendienres
        var pedidos = [
        	["event", "Misc Hernandez (La Estanzuela)", "Fecha de entrega: 15/01/2023"]
        ]
        this.listPedidos = ui.addList(this.layMain, pedidos, "icon, outline", 0.96, 0.734)
        this.listPedidos.label = "Pedidos pendientes"
        
        //Agregar barra de navegacion
        var menuNav = [
        	["", "add_shopping_cart"], //Ventas
        	["", "inventory"], //Inventarii
        	["", "dvr"], //Historial
        	["", "equalizer"], //Reportes
        	["", "people"] //Clientes
        ]
        this.navBar = ui.addBottomNavbar(this.layMain, menuNav, "hidelabels", 1)
        this.navBar.labels = false
        this.navBar.setOnTouch(this.onMenu)
        
    }
    
    onMenu( title, index )
    {
        ui.showPopup(index)
    }
}