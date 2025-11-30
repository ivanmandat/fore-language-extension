# ITabObjectGroup.ChildItemsCount

ITabObjectGroup.ChildItemsCount
-


# ITabObjectGroup.ChildItemsCount


## Синтаксис


ChildItemsCount: Integer;


## Описание


Свойство ChildItemsCount возвращает
 количество элементов группы.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1», компонента TabSheetBox
 и компонента UiTabSheet с наименованием
 «UiTabSheet1», являющимся источником данных для TabSheetBox.
 В таблице должна быть создана хотя бы одна группа объектов. Должна быть
 добавлена ссылка на системную сборку Tab.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    Tab: ITabSheet;

    Group1: ITabObjectGroup;

Begin

    Tab := UiTabSheet1.TabSheet;

    Group1 := Tab.Objects.GroupSelected;

    Debug.WriteLine("Количество элементов группы = " + Group1.ChildItemsCount.ToString);

End Sub Button1OnClick;


После выполнения примера в консоль будет выведено сообщение с соответствующим
 количеством элементов группы.


См. также:


[ITabObjectGroup](ITabObjectGroup.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
