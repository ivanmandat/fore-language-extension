# TabObjectMovingEventArgs.Create

TabObjectMovingEventArgs.Create
-


# TabObjectMovingEventArgs.Create


## Синтаксис


Create(Sheet: [ITabSheetBox](../../Interface/ITabSheetBox/ITabSheetBox.htm);
 Object: [ITabObject](../../Interface/ITabObject/ITabObject.htm);
 Rect: [IGxRectF](ModDrawing.chm::/Interface/IGxRectF/IGxRectF.htm);
 [Cancel: Boolean]);


## Параметры


Sheet. Компонент, для которого
 генерируется событие;


Object. Объект,
 для которого генерируется событие;


Rect.
 Координаты прямоугольной области, занимаемой объектом;


Cancel. Признак отмены перемещения
 объекта.


## Описание


Конструктор Create создает аргумент
 события, происходящего при перемещении объекта.


## Пример


Для выполнения примера предполагается наличие формы, содержащей компоненты
 TabSheetBox с наименованием TabSheetBox1
 и UiReport с наименованием UiReport1,
 являющийся источником данных для TabSheetBox1. В свойстве Active
 компонента UiReport1 установите значение True. UiReport1 должен содержать
 загруженный регламентный отчет с фигурами на активном листе.


В примере будет создан и вызван пользовательский обработчик для события
 OnObjectMoving в компоненте
 TabSheetBox1.


Добавьте ссылки на системные сборки: Drawing, Tab, Ui.


			// Создаем пользовательский обработчик события OnObjectMoving

Sub UserOnObjectMoving(Sender: Object; Args: ITabObjectMovingEventArgs);

Begin

    Args.Cancel := Not WinApplication.ConfirmationBox("Переместить объект: " + Args.Object.Id + "?");

End Sub UserOnObjectMoving;

// Вызываем пользовательский обработчик события OnObjectMoving

Public Sub UserProc;

Var

    Tab: ITabSheet;

    rObject: ITabObject;

    Rect: IGxRectF;

    Argument: ITabObjectMovingEventArgs;

Begin

    Tab := TabSheetBox1.Source.GetTabSheet;

    rObject := Tab.Objects.Object("PrxShape1");

    Argument := New TabObjectMovingEventArgs.Create(TabSheetBox1, rObject, Rect, False);

    UserOnObjectMoving(TabSheetBox1, Argument);

End Sub UserProc;


В результате выполнения процедура UserProc
 вызовет пользовательский обработчик UserOnObjectMoving.


См. также:


[TabObjectMovingEventArgs](TabObjectMovingEventArgs.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
