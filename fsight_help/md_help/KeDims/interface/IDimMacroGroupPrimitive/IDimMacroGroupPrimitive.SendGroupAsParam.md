# IDimMacroGroupPrimitive.SendGroupAsParam

IDimMacroGroupPrimitive.SendGroupAsParam
-


# IDimMacroGroupPrimitive.SendGroupAsParam


## Синтаксис


SendGroupAsParam: Boolean;


## Описание


Свойство SendGroupAsParam
 определяет, используется ли в макросе группа элементов.


## Комментарии


Допустимые значения:


	- True. В макросе используется
	 группа элементов, передаваемая в виде [параметра
	 макроса](IDimMacroGroupPrimitive.htm);


	- False. Значение по умолчанию.
	 Группа элементов не используется в макросе.


Если свойству установлено значение True,
 то функция в макросе должна иметь следующую сигнатуру:


	Public Shared Function <наименование
	 процедуры>(<экземпляр справочника>: IDimInstance; <текущая
	 группа элементов>: IDimElementGroup): IDimSelection;

	Begin


	End Function <наименование процедуры>;


## Пример


Для выполнения примера в репозитории предполагается наличие справочника
 с идентификатором DICT_GROUP, содержащего группу элементов. Также предполагается
 наличие модуля с идентификатором MACRO_DIM_EL_GROUP, содержащего класс
 Primitives, который реализует функцию GroupMacro. Данная функция будет
 использоваться в качестве макроса, формирующего группу элементов. Код
 модуля MACRO_DIM_EL_GROUP приведён ниже.


Добавьте ссылки на системные сборки: Dimensions, Metabase.


Sub UserProc;

Var

    mb: IMetabase;

    Desc: IMetabaseObjectDescriptor;

    Group: IDimElementGroup;

    i: Integer;

    MacroPrimitive: IDimMacroGroupPrimitive;

Begin

    // Получаем текущий репозиторий

    mb := Metabaseclass.Active;

    // Получаем справочник

    Desc := mb.ItemById("DICT_GROUP").Children.Item(0);

    // Проверяем, является ли первый дочерний объект справочника группой элементов

    If Desc.ClassId = 1029 Then

        // Получаем группу элементов для редактирования

        Group := Desc.Edit As IDimElementGroup;

        // Изменяем наименование группы элементов

        (Group As IMetabaseObject).Name := "Элементы, сформированные макросом";

        // Удаляем из группы все примитивы отметки

        i := Group.Count;

        Repeat

            i := i - 1;

            Group.RemovePrimitive(i);

        Until i = 0;

        // Добавляем в группу примитив, являющийся макросом

        MacroPrimitive := Group.AddPrimitive(SelectionGroupType.Macro) As IDimMacroGroupPrimitive;

        // Указываем, что макрос будет использовать группу элементов

        MacroPrimitive.SendGroupAsParam := True;

        // Указываем модуль

        MacroPrimitive.Module := mb.ItemById("MACRO_DIM_EL_GROUP");

        // Указываем привязку макроса

        MacroPrimitive.ModuleMacro := "Primitives.GroupMacro";

        // Сохраняем изменения в группе отметки

        (Group As IMetabaseObject).Save;

    End If;

End Sub UserProc;


Код модуля MACRO_DIM_EL_GROUP.


Добавьте ссылку на системную сборку Dimensions.


Class Primitives: Object


    // Макрос для формирования отметки элементов справочника

    Public Shared Function GroupMacro(Dimension: IDimInstance; DimGroup: IDimElementGroup): IDimSelection;

    Var

        DictSelection, GroupSelection: IDimSelection;

        i: Integer;

    Begin

        // Создаём отметку элементов справочника

        DictSelection := Dimension.CreateSelection;

        // Включаем в отметку три элемента справочника

        DictSelection.SelectElement(0, False);

        DictSelection.SelectElement(2, False);

        DictSelection.SelectElement(5, False);

        // Получаем отметку группы элементов

        GroupSelection := DimGroup.Selection;

        // Включаем в отметку элементов справочника отметку группы элементов

        For i := 0 To GroupSelection.SelectedCount - 1 Do

            DictSelection.SelectElement(GroupSelection.Element(0), False);

        End For;

        // Возвращаем созданную отметку элементов справочника

        Return DictSelection;

    End Function GroupMacro;


End Class Primitives;


В результате выполнения примера во всех объектах, использующих справочник
 MACRO_DIM_EL_GROUP в качестве измерения, будет доступна группа элементов
 «Элементы, сформированные макросом», формируемая макросом MACRO_DIM_EL_GROUP.


См. также:


[IDimMacroGroupPrimitive](IDimMacroGroupPrimitive.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
