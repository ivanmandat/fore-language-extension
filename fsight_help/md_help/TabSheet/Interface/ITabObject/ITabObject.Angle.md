# ITabObject.Angle

ITabObject.Angle
-


# ITabObject.Angle


## Синтаксис


Angle: Double;


## Описание


Свойство Angle определяет угол
 поворота объекта.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1», компонента TabSheetBox
 и компонента UiTabSheet с наименованием
 «UiTabSheet1», являющимся источником данных для TabSheetBox.
 В таблице должны быть созданы какие-либо объекты. Должна быть добавлена
 ссылка на системную сборку Tab.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    Tab: ITabSheet;

    TabObj: ITabObject;

Begin

    Tab := UiTabSheet1.TabSheet;

    TabObj := Tab.Objects.SelectedObject(0);

    TabObj.Angle := 30;

End Sub Button1OnClick;


После выполнения примера объект таблицы будет развернут на 30 градусов
 по часовой стрелке.


См. также:


[ITabObject](ITabObject.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
