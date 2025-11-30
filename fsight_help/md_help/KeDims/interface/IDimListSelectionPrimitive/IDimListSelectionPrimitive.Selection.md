# IDimListSelectionPrimitive.Selection

IDimListSelectionPrimitive.Selection
-


# IDimListSelectionPrimitive.Selection


## Синтаксис


Selection: [IDimSelection](../IDimSelection/IDimSelection.htm);


## Описание


Свойство Selection определяет
 отметку элементов примитива, которую необходимо установить/снять при построении
 схемы отметки справочника.


## Комментарии


Для определения того, что должно произойти с отметкой элементов примитива
 при построении схемы отметки справочника (устанавливается/снимается),
 используйте свойство [IDimSelectionSchemaPrimitive.Deselect](../IDimSelectionSchemaPrimitive/IDimSelectionSchemaPrimitive.Deselect.htm).


## Пример


Для выполнения примера в репозитории требуется наличие табличного справочника
 с идентификатором «TAB_DIM».


Добавьте ссылки на системные сборки: Dimensions, Metabase.


			Sub UserProc;

Var

    MB: IMetabase;

    ObjDesc: IMetabaseObjectDescriptor;

    DimInst: IDimInstance;

    DimSelect: IDimSelection;

    Child: IMetabaseObjectDescriptors;

    Gp: IMetabaseObjectDescriptor;

    Mobj: IMetabaseObject;

    DimSelSchema: IDimSelectionSchema;

    SchemaPrimit: IDimSelectionSchemaPrimitive;

    i: Integer;

Begin

    // Получаем текущий репозиторий

    MB := MetabaseClass.Active;

    // Получаем справочник

    ObjDesc := MB.ItemById("TAB_DIM");

    DimInst := ObjDesc.Open(Null) As IDimInstance;

    // Получаем отметку справочника

    DimSelect := DimInst.CreateSelection;

    // Добавляем в отметку первый и последний элементы

    DimSelect.SelectElement(0, False);

    DimSelect.SelectElement(DimInst.Elements.Count - 1, False);

    // Получаем дочерние объекты справочника

    Child := ObjDesc.Children;

    If Child.Count <> 0 Then

        // Перебираем все дочерние объекты справочника, чтобы найти схему отметки элементов справочника

        For i := 0 To Child.Count - 1 Do

            Gp := Child.Item(i);

            // Находим схему отметки элементов справочника

            If Gp.ClassId = 1030 Then

                Mobj := Gp.Edit;

                DimSelSchema := Mobj As IDimSelectionSchema;

                // Добавляем примитив в схему отметки справочника

                SchemaPrimit := DimSelSchema.Add(SelectionPrimitiveType.Specified);

                // Определяем отметку элементов примитива

                (SchemaPrimit As IDimListSelectionPrimitive).Selection := DimSelect;

                Mobj.Save;

            End If;

        End For;

    End If;

End Sub UserProc;


В результате выполнения примера в схему отметки справочника будет добавлен
 примитив, отмечающий элементы по списку. В отметку примитива будут добавлены
 два элемента справочника - первый и последний.


См. также:


[IDimListSelectionPrimitive](IDimListSelectionPrimitive.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
