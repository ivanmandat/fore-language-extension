# IWxViewExporter.GetBitmap

IWxViewExporter.GetBitmap
-


# IWxViewExporter.GetBitmap


## Синтаксис


GetBitmap: [IGxBitmap](ModDrawing.chm::/Interface/IGxBitmap/IGxBitmap.htm);


## Описание


Метод GetBitmap возвращает графическое
 изображение рабочего пространства.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием Button1, компонента WorkspaceBox с наименованием
 WorkspaceBox1 и какого-либо источника данных для WorkspaceBox1. На рабочем
 пространстве должны находиться несколько объектов.


Добавьте ссылки на системные сборки: Andy, Drawing, Workspace.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    ws: IWxWorkspace;

	    view: IWxView;

	    Exp: IWxViewExporter;

	    arrow: IWxArrow;

	    ellipse: IWxEllipse;

	Begin

	    ws := UiWorkspace1.WxWorkspace;

	    view := ws.Views.Item(0);

	    ellipse := ws.CreateEllipse;

	    arrow := ws.CreateArrow;

	    Arrow.FirstPoint := New GxPointF.Create(10, 10);

	    Arrow.LastPoint := New GxPointF.Create(3, 19);

	    Exp := New WxViewExporter.Create;

	    Exp.WxView := View;

	    ImageBox1.Image := Exp.GetBitmap;

	End Sub Button1OnClick;


После выполнения примера в компонент ImageBox1 будет загружено графическое
 изображение рабочего пространства, отображаемого в компоненте WorkspaceBox1.


См. также:


[IWxViewExporter](IWxViewExporter.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
