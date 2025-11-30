# ITabObjects.GroupSelected

ITabObjects.GroupSelected
-


# ITabObjects.GroupSelected


## Синтаксис


GroupSelected: [ITabObjectGroup](../ITabObjectGroup/ITabObjectGroup.htm);


## Описание


Метод GroupSelected осуществляет
 группировку выделенных объектов.


## Комментарии


Элементами группы могут быть как отдельные объекты, так и подгруппы.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1», компонента TabSheetBox
 и компонента UiTabSheet с наименованием
 «UiTabSheet1», являющимся источником данных для TabSheetBox.
 В таблице должны быть созданы какие-либо объекты. Должна быть добавлена
 ссылка на системную сборку Tab.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    i: integer;

    Tab: ITabSheet;

    Objs: ITabObjects;

    TabObjs: ITabObject;

Begin

    Tab := UiTabSheet1.TabSheet;

    Objs := Tab.Objects;

    For i := 0 To (Objs.Count - 1) Do

        Objs.Item(i).Select_;

    End For;

    TabObjs := Tab.Objects.GroupSelected;

End Sub Button1OnClick;


После выполнения примера будут сгруппированы все объекты, находящиеся
 в таблице.


См. также:


[ITabObjects](ITabObjects.htm)
 | [ITabObjects.UngroupSelected](ITabObjects.UngroupSelected.htm)
 | [ITabObjectGroup.Ungroup](../ITabObjectGroup/ITabObjectGroup.Ungroup.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
