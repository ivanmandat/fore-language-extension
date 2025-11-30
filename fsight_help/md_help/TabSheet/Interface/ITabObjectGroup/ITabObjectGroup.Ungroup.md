# ITabObjectGroup.Ungroup

ITabObjectGroup.Ungroup
-


# ITabObjectGroup.Ungroup


## Синтаксис


Ungroup;


## Описание


Метод Ungroup осуществляет разгруппировку
 элементов.


## Комментарии


Метод Ungroup разгруппировывает
 все элементы данной группы. Если выделено несколько групп, то метод сработает
 для первой выделенной.


Для группировки элементов используйте метод [ITabObjects.GroupSelected](../ITabObjects/ITabObjects.GroupSelected.htm).


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1», компонента TabSheetBox
 и компонента UiTabSheet с наименованием
 «UiTabSheet1», являющимся источником данных для TabSheetBox.
 Объекты, созданные в таблице должны быть сгруппированными. Должна быть
 добавлена ссылка на системную сборку Tab.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    Tab: ITabSheet;

    TabObj: ITabObject;

    TabObjGr: ITabObjectGroup;

Begin

    Tab := UiTabSheet1.TabSheet;

    TabObj := Tab.Objects.SelectedObject(0);

    TabObjGr := TabObj As ITabObjectGroup;

    If TabObjGr <> Null Then

        TabObjGr.Ungroup;

    End If;

End Sub Button1OnClick;


После выполнения примера произойдет разгруппировка всех объектов группы.


См. также:


[ITabObjectGroup](ITabObjectGroup.htm)
 | [ITabObjects.GroupSelected](../ITabObjects/ITabObjects.GroupSelected.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
