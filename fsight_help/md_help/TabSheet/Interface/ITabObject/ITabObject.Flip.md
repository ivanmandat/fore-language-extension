# ITabObject.Flip

ITabObject.Flip
-


# ITabObject.Flip


## Синтаксис


Flip(Value: [TabObjectFlip](../../Enums/TabObjectFlip.htm));


## Параметры


Value. Тип отражения.


## Описание


Метод Flip отражает объект отчета.


## Комментарии


Отражение может быть по горизонтали, если Value
 имеет значение [TabObjectFlip.Horizontal](../../Enums/TabObjectFlip.htm),или
 по вертикали, если значение Value
 - [TabObjectFlip.Vertical](../../Enums/TabObjectFlip.htm).


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1», компонента TabSheetBox
 и компонента UiTabSheet с наименованием
 «UiTabSheet1», являющимся источником данных для TabSheetBox.
 В таблице должен быть создан хотя бы один объект. Должна быть добавлена
 ссылка на системную сборку Tab.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

    Var

    Tab: ITabSheet;

    TabObj: ITabObject;

Begin

    Tab := UiTabSheet1.TabSheet;

    TabObj := Tab.Objects.Item(0);

    TabObj.Flip(TabObjectflip.Horizontal);

End Sub Button1OnClick;


После выполнения примера объект таблицы с индексом 0 будет отражен слева
 направо.


См. также:


[ITabObject](ITabObject.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
