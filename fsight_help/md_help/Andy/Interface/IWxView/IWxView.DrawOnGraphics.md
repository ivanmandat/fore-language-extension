# IWxView.DrawOnGraphics

IWxView.DrawOnGraphics
-


# IWxView.DrawOnGraphics


## Синтаксис


		DrawOnGraphics(Graphics: [IGxGraphics](ModDrawing.chm::/Interface/IGxGraphics/IGxGraphics.htm));


## Параметры


Graphics. Графический контекст.


## Описание


Метод DrawOnGraphics рисует
 рабочее пространство на графическом контексте.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1», компонента WorkspaceBox
 с наименованием «WorkspaceBox1» и какого-либо источника данных для «WorkspaceBox1».
 Предполагается наличие в файловой системе изображения «C:\WSP.png».


Добавьте ссылки на системные сборки: Andy, Drawing, Workspace.


					Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

		Var

		    ws: IWxWorkspace;

		    view: IWxView;

		    ellipse: IWxEllipse;

		    Img: IGxImage;

		    Graph: IGxGraphics;

		Begin

		    // Получаем рабочее пространство для редактирования

		    ws := UiWorkspace1.WxWorkspace;

		    view := ws.CreateView;

		    ellipse := ws.CreateEllipse;

		    view.AutoScaleAndScroll;

		    Img := GxBitmap.CreateNew(300, 300, GxPixelFormat.Format32bppArgb);

		    Graph := GxGraphicsClass.FromImage(Img);

		    View.DrawOnGraphics(Graph);

		    Img.SaveToFileEncoded("C:\WSP.png", GxImageFormats.Png);

		End Sub Button1OnClick;


После выполнения примера в указанный файл будет сохранена часть изображения
 рабочего пространства заданного размера.


См. также:


[IWxView](IWxView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
