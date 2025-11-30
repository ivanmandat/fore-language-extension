# ITabObjects.UnroupSelected

ITabObjects.UnroupSelected
-


# ITabObjects.UngroupSelected


## Синтаксис


UngroupSelected;


## Описание


Метод UngroupSelected осуществляет
 разгруппировку выделенных объектов.


## Комментарии


Если выбрано несколько групп, то метод разгруппирует их все.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1», компонента TabSheetBox
 и компонента UiTabSheet с наименованием
 «UiTabSheet1», являющимся источником данных для TabSheetBox.
 Объекты, созданные в таблице, должны быть сгруппированными. Должна быть
 добавлена ссылка на системную сборку Tab.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    i: integer;

    Tab: ITabSheet;

    Objs: ITabObjects;

Begin

    Tab := UiTabSheet1.TabSheet;

    Objs := Tab.Objects;

    For i := 0 To (Objs.Count - 1) Do

        Objs.Item(i).Select_;

    End For;

    Objs.UngroupSelected;

End Sub Button1OnClick;


После выполнения примера произойдет разгруппировка выделенных объектов.


См. также:


[ITabObjects](ITabObjects.htm)
 | [ITabObjects.GroupSelected](ITabObjects.GroupSelected.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
