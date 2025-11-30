# IDimMacroSelectionPrimitive.Module

IDimMacroSelectionPrimitive.Module
-


# IDimMacroSelectionPrimitive.Module


## Синтаксис


Module: [IMetabaseObjectDescriptor](KeSom.chm::/Interface/IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.htm);


## Описание


Свойство Module определяет объект
 репозитория, содержащий прикладной макрос, используемый для формирования
 схемы отметки.


## Комментарии


Свойство используется вместе с [IDimMacroSelectionPrimitive.ModuleMacro](IDimMacroSelectionPrimitive.ModuleMacro.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие справочника
 с идентификатором DICT_SCHEMA, содержащего схему отметки, и модуля с идентификатором
 MACRO_DIM_SELECTION, содержащего класс Primitives,
 который реализует процедуру SelectionMacro.
 Данная процедура будет использоваться в качестве макроса, формирующего
 схему отметки. Код модуля MACRO_DIM_SELECTION приведен ниже.


Добавьте ссылки на системные сборки: Dimensions, Metabase.


	Sub UserProc;

	Var

	    mb: IMetabase;

	    Desc: IMetabaseObjectDescriptor;

	    Schema: IDimSelectionSchema;

	    i: Integer;

	    MacroPrimitive: IDimMacroSelectionPrimitive;

	Begin

	    // Получаем текущий репозиторий

	    mb := Metabaseclass.Active;

	    // Получаем справочник

	    Desc := mb.ItemById("DICT_SCHEMA").Children.Item(0);

	    // Проверяем, является ли первый дочерний объект справочника схемой отметки

	    If Desc.ClassId = 1030 Then

	        // Получаем схему для редактирования

	        Schema := Desc.Edit As IDimSelectionSchema;

	        // Изменяем наименование группы элементов

	        (Schema As IMetabaseObject).Name := "Схема, сформированная макросом";

	        // Удаляем из схемы все примитивы отметки

	        i := Schema.Count;

	        Repeat

	            i := i - 1;

	            Schema.Remove(i);

	        Until i = 0;

	        // Добавляем в схему примитив, являющийся макросом

	        MacroPrimitive := Schema.Add(SelectionPrimitiveType.Macro) As IDimMacroSelectionPrimitive;

	        // Указываем модуль

	        MacroPrimitive.Module := mb.ItemById("MACRO_DIM_SELECTION");

	        // Указываем привязку к макросу

	        MacroPrimitive.ModuleMacro := "Primitives.SelectionMacro";

	        // Сохраняем изменения в схеме отметки

	        (Schema As IMetabaseObject).Save;

	    End If;

	End Sub UserProc;


Код модуля MACRO_DIM_SELECTION.


Добавьте ссылку на системную сборку Dimensions.


Class Primitives: Object


    // Макрос для формирования отметки элементов справочника

    Public Shared Sub SelectionMacro(Selection, Group: IDimSelection);

    Begin

        // Включаем в отметку элементы справочника

        Selection.SelectElement(1, False);

        Selection.SelectElement(3, False);

        Selection.SelectElement(5, False);

        Selection.SelectElement(7, False);

    End Sub SelectionMacro;


End Class Primitives;


В результате выполнения примера во всех объектах, использующих справочник
 DICT_SCHEMA в качестве измерения, будет доступна схема отметки «Схема,
 сформированная макросом», формируемая макросом MACRO_DIM_SELECTION.


См. также:


[IDimMacroSelectionPrimitive](IDimMacroSelectionPrimitive.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
