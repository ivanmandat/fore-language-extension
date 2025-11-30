# ITabObject.ParentGroup

ITabObject.ParentGroup
-


# ITabObject.ParentGroup


## Синтаксис


ParentGroup: [ITabObjectGroup](../ITabObjectGroup/ITabObjectGroup.htm);


## Описание


Свойство ParentGroup возвращает
 группу элемента.


## Комментарии


Если текущий объект не принадлежит ни какой группе, то свойство ParentGroup вернет значение Null.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1», компонента TabSheetBox
 и компонента UiTabSheet с наименованием
 «UiTabSheet1», являющимся источником данных для TabSheetBox.
 В таблице должна быть, создана хотя бы одна группа объектов. Должна быть
 добавлена ссылка на системную сборку Tab.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    Tab: ITabSheet;

    Group: ITabObjectGroup;

Begin

    Tab := UiTabSheet1.TabSheet;

    Group := Tab.Objects.Item(0).ParentGroup;

    Debug.WriteLine(Group.Id);

End Sub Button1OnClick;


После выполнения примера свойство вернет группу, которой принадлежит
 текущий объект. Наименование группы будет выведено в консоль.


См. также:


[ITabObject](ITabObject.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
