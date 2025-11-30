# IWxView

IWxView
-


# IWxView


Сборка: Andy;


## Описание


Интерфейс IWxView определяет
 настройки отображения рабочего пространства.


## Иерархия наследования


           [IWxObject](../IWxObject/IWxObject.htm)


           IWxView


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [ActiveShape](IWxView.ActiveShape.htm)
		 Свойство ActiveShape
		 определяет активную фигуру.


		 ![](../../Property_Image.gif)
		 [ActiveTool](IWxView.ActiveTool.htm)
		 Свойство ActiveTool
		 определяет активный инструмент.


		 ![](../../Property_Image.gif)
		 [BackgroundColor](IWxView.BackgroundColor.htm)
		 Свойство BackgroundColor
		 определяет цвет поля рабочего пространства.


		 ![](../../Property_Image.gif)
		 [DisplayConnectionPoints](IWxView.DisplayConnectionPoints.htm)
		 Свойство DisplayConnectionPoints
		 определяет признак отображения точек соединения.


		 ![](../../Property_Image.gif)
		 [DisplayFocusFrame](IWxView.DisplayFocusFrame.htm)
		 Свойство DisplayFocusFrame
		 определяет признак отображения фокусной рамки, которая вызывается
		 при нажатии на клавишу TAB.


		 ![](../../Property_Image.gif)
		 [DisplayGrid](IWxView.DisplayGrid.htm)
		 Свойство DisplayGrid
		 определяет признак отображения сетки.


		 ![](../../Property_Image.gif)
		 [DisplayIntersections](IWxView.DisplayIntersections.htm)
		 Свойство DisplayIntersections
		 определяет признак отображения пересечений связей.


		 ![](../../Property_Image.gif)
		 [DisplayScrollBars](IWxView.DisplayScrollBars.htm)
		 Свойство DisplayScrollBars
		 определяет признак отображения полос прокрутки.


		 ![](../../Property_Image.gif)
		 [DisplaySelections](IWxView.DisplaySelections.htm)
		 Свойство DisplaySelections
		 определяет признак отображения выделения объекта.


		 ![](../../Property_Image.gif)
		 [ExplorerMode](IWxView.ExplorerMode.htm)
		 Свойство ExplorerMode
		 определяет способ выделения фигур при [ActiveTool](IWxView.ActiveTool.htm),
		 установленном в [SelectOnly](../../Enums/WxTool.htm).


		 ![](../../Property_Image.gif)
		 [Fixed](IWxView.Fixed.htm)
		 Свойство Fixed определяет
		 признак блокировки рабочего пространства для прокрутки в область
		 отрицательных координат.


		 ![](../../Property_Image.gif)
		 [FocusedShape](IWxView.FocusedShape.htm)
		 Свойство FocusedShape
		 определяет фигуру, которая находится в фокусной рамке, которая
		 вызывается при нажатии на клавишу TAB.


		 ![](../../Property_Image.gif)
		 [GlueConnector](IWxView.GlueConnector.htm)
		 Свойство GlueConnector
		 определяет возможность создания связи на свободном пространстве.


		 ![](../../Property_Image.gif)
		 [Id](IWxView.Id.htm)
		 Свойство Id определяет
		 идентификатор отображения.


		 ![](../../Property_Image.gif)
		 [Offset](IWxView.Offset.htm)
		 Свойство Offset определяет
		 смещение отображения относительно центра рабочего пространства.


		 ![](../../Property_Image.gif)
		 [Scale](IWxView.Scale.htm)
		 Свойство Scale определяет
		 масштаб отображения.


		 ![](../../Property_Image.gif)
		 [SelectedShapes](IWxView.SelectedShapes.htm)
		 Свойство SelectedShapes
		 определяет параметры коллекции выделенных фигур.


		 ![](../../Property_Image.gif)
		 [SelectionStyle](IWxView.SelectionStyle.htm)
		 Свойство SelectionStyle
		 определяет параметры оформления выделенного объекта на рабочем
		 пространстве.


		 ![](../../Property_Image.gif)
		 [Size](IWxView.Size.htm)
		 Свойство Size определяет
		 размер отображения рабочего пространства.


		 ![](../../Property_Image.gif)
		 [Workspace](IWxView.Workspace.htm)
		 Свойство Workspace
		 возвращает владельца - рабочее пространство.


## Свойства, унаследованные от [IWxObject](../IWxObject/IWxObject.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Protection](../IWxObject/IWxObject.Protection.htm)
		 Свойство Protection
		 определяет защиту от изменения свойств объекта.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [AutoScroll](IWxView.AutoScroll.htm)
		 Метод AutoScroll центрирует
		 изображение на рабочем пространстве без изменения масштаба отображения.


		 ![](../../Sub_Image.gif)
		 [ArrangeShape](IWxView.ArrangeShape.htm)
		 Метод ArrangeShape
		 выставляет фигуру на диагональ, направленную из верхнего левого
		 угла в нижний правый угол отображения.


		 ![](../../Sub_Image.gif)
		 [AutoScaleAndScroll](IWxView.AutoScaleAndScroll.htm)
		 Метод AutoScaleAndScroll
		 центрирует и масштабирует изображение рабочего пространства под
		 размер отображения.


		 ![](../../Sub_Image.gif)
		 [ConvertPtToView](IWxView.ConvertPtToView.htm)
		 Метод ConvertPtToView
		 преобразует заданную точку в пикселях в точку в миллиметрах.


		 ![](../../Sub_Image.gif)
		 [CopySelectedShapes](IWxView.CopySelectedShapes.htm)
		 Метод CopySelectedShapes
		 копирует выделенные объекты в буфер обмена.


		 ![](../../Sub_Image.gif)
		 [CutSelectedShapes](IWxView.CutSelectedShapes.htm)
		 Метод CutSelectedShapes
		 вырезает выделенные объекты в буфер обмена.


		 ![](../../Sub_Image.gif)
		 [DeleteSelectedShapes](IWxView.DeleteSelectedShapes.htm)
		 Метод DeleteSelectedShapes
		 удаляет выделенные объекты.


		 ![](../../Sub_Image.gif)
		 [DrawOnGraphics](IWxView.DrawOnGraphics.htm)
		 Метод DrawOnGraphics
		 рисует рабочее пространство на графическом контексте.


		 ![](../../Sub_Image.gif)
		 [GetShapeByPt](IWxView.GetShapeByPt.htm)
		 Метод GetShapeByPt
		 получает объект по заданной координате.


		 ![](../../Sub_Image.gif)
		 [GroupSelectedShapes](IWxView.GroupSelectedShapes.htm)
		 Метод GroupSelectedShapes
		 создает группу из выделенных объектов.


		 ![](../../Sub_Image.gif)
		 [Paste](IWxView.Paste.htm)
		 Метод Paste вставляет
		 объекты из буфера обмена.


		 ![](../../Sub_Image.gif)
		 [ScrollToShape](IWxView.ScrollToShape.htm)
		 Метод ScrollToShape
		 центрирует изображение рабочего пространства относительно указанной
		 фигуры.


		 ![](../../Sub_Image.gif)
		 [SelectAllShapes](IWxView.SelectAllShapes.htm)
		 Метод SelectAllShapes
		 выделяет все фигуры рабочей области.


		 ![](../../Sub_Image.gif)
		 [SetBackgroundImage](IWxView.SetBackgroundImage.htm)
		 Метод SetBackgroundImage
		 устанавливает указанную часть изображения в качестве фона для
		 рабочего пространства.


		 ![](../../Sub_Image.gif)
		 [UngroupSelectedShapes](IWxView.UngroupSelectedShapes.htm)
		 Метод UngroupSelectedShapes
		 разгруппировывает выделенные фигуры.


		 ![](../../Sub_Image.gif)
		 [ViewToWorkspace](IWxView.ViewToWorkspace.htm)
		 Метод ViewToWorkspace
		 возвращает координату рабочего пространства, которая соответствует
		 заданной координате отображения.


		 ![](../../Sub_Image.gif)
		 [WorkspaceToView](IWxView.WorkspaceToView.htm)
		 Метод WorkspaceToView
		 возвращает координату отображения, которая соответствует заданной
		 координате рабочего пространства.


## Методы, унаследованные от [IWxObject](../IWxObject/IWxObject.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [BeginUpdate](../IWxObject/IWxObject.BeginUpdate.htm)
		 Метод BeginUpdate устанавливает
		 запрет на перерисовку объекта.


		 ![](../../Sub_Image.gif)
		 [Delete](../IWxObject/IWxObject.Delete.htm)
		 Метод Delete удаляет
		 объект.


		 ![](../../Sub_Image.gif)
		 [EndUpdate](../IWxObject/IWxObject.EndUpdate.htm)
		 Метод EndUpdate снимает
		 запрет на перерисовку объекта.


См. также:


[Интерфейсы сборки Andy](../interface_built_Andy.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
