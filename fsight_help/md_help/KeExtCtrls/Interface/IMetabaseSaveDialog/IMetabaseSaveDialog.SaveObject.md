# IMetabaseSaveDialog.SaveObject

IMetabaseSaveDialog.SaveObject
-


# IMetabaseSaveDialog.SaveObject


## Синтаксис


SaveObject: [IMetabaseObjectDescriptor](KeSom.chm::/Interface/IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.htm);


## Описание


Свойство SaveObject определяет
 описание сохраняемого объекта репозитория.


## Комментарии


Если данное свойство установлено, то диалог будет выдан для сохранения
 указанного объекта с новым идентификатором и наименованием. При инициализации
 диалога идентификатор и наименование будут сгенерированы автоматически.
 Также в диалоге можно выбрать существующий объект, который будет перезаписан.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1» и компонента MetabaseSaveDialog с
 наименованием «MetabaseSaveDialog1». В репозитории имеется объект с идентификатором
 OBJECT.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    MB: IMetabase;

	    MObjDesc: IMetabaseObjectDescriptor;

	    ClassFilter: IMetabaseDialogClassFilter;

	    Filters: IMetabaseDialogFilters;

	    i: Integer;

	Begin

	    MB := MetabaseClass.Active;

	    // Объект, который необходимо сохранить

	    // с новым идентификатором и наименованием

	    MObjDesc := MB.ItemById("OBJECT");

	    // Фильтр для возможности сохранения объекта в существующий объект

	    // такого же класса

	    ClassFilter := New MetabaseDialogClassFilter.Create;

	    ClassFilter.ObjectClass := MetabaseClass.GetMetabaseObjectClass(MObjDesc.ClassId);

	    Filters := MetabaseSaveDialog1.Filters;

	    i := Filters.AddFilter(ClassFilter);

	    MetabaseSaveDialog1.FilterIndex := i;

	    // Указание сохраняемого объекта

	    MetabaseSaveDialog1.SaveObject := MObjDesc;

	    MetabaseSaveDialog1.Execute(Self);

	End Sub Button1OnClick;


После выполнения примера при нажатии на кнопку будет выведен диалог
 сохранения указанного объекта с новым идентификатором и наименованием.
 В диалоге будет возможен выбор существующих объектов такого же класса.


См. также:


[IMetabaseSaveDialog](IMetabaseSaveDialog.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
