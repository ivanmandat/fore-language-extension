# TabObjectResizingEventArgs.Create

TabObjectResizingEventArgs.Create
-


# TabObjectResizingEventArgs.Create


## Синтаксис


Create(Sheet: [ITabSheetBox](../../Interface/ITabSheetBox/ITabSheetBox.htm);
 Object: [ITabObject](../../Interface/ITabObject/ITabObject.htm);
 Rect: [IGxRectF](ModDrawing.chm::/Interface/IGxRectF/IGxRectF.htm);
 Side: [TabObjectResizingSide](../../Enums/TabObjectResizingSide.htm);
 [Cancel: Boolean]);


## Параметры


Sheet. Компонент, для которого
 генерируется событие;


Object. Объект, для которого
 генерируется событие;


Rect.
 Координаты прямоугольной области, занимаемой объектом;


Side. Сторона, которая была
 изменена;


Cancel. Признак отмены изменения
 размера объекта.


## Описание


Конструктор Create создает аргумент
 события, происходящего при каждом изменении размера объекта.


## Пример


Для выполнения примера предполагается наличие формы, содержащей компоненты
 TabSheetBox с наименованием TabSheetBox1
 и UiReport с наименованием UiReport1,
 являющийся источником данных для TabSheetBox1. В свойстве Active
 компонента UiReport1 установите значение True. UiReport1 должен содержать
 загруженный регламентный отчет с фигурами на активном листе.


В примере будет создан и вызван пользовательский обработчик для события
 OnObjectResizing в компоненте
 TabSheetBox1.


Добавьте ссылки на системные сборки: Drawing, Tab, Ui.


	// Создаем пользовательский обработчик события OnObjectResizing

	Sub UserOnObjectResizing(Sender: Object; Args: ITabObjectResizingEventArgs);

	Begin

	    Args.Cancel := Not WinApplication.ConfirmationBox("Изменить размеры объекта: " + Args.Object.Id + "?");

	End Sub UserOnObjectResizing;

	// Вызываем пользовательский обработчик события OnObjectResizing

	Public Sub UserProc;

	Var

	    Tab: ITabSheet;

	    rObject: ITabObject;

	    Rect: IGxRectF;

	    Argument: TabObjectResizingEventArgs;

	Begin

	    Tab := TabSheetBox1.Source.GetTabSheet;

	    rObject := Tab.Objects.Object("PrxShape1");

	    Argument := New TabObjectResizingEventArgs.Create(TabSheetBox1, rObject, Rect, TabObjectResizingSide.Left, False);

	    UserOnObjectResizing(TabSheetBox1, Argument);

	End Sub UserProc;


В результате выполнения процедура UserProc
 вызовет пользовательский обработчик UserOnObjectResizing.


См. также:


[TabObjectResizingEventArgs](TabObjectResizingEventArgs.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
