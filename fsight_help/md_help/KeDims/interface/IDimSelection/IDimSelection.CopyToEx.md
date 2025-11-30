# IDimSelection.CopyToEx

IDimSelection.CopyToEx
-


# IDimSelection.CopyToEx


## Синтаксис


CopyToEx (Options: [SelectionCopyToExOptions](../../Enums/SelectionCopyToExOptions.htm);
 Dest: [IDimSelection](IDimSelection.htm); Replace: Boolean);


## Параметры


Options. Определяет копируемую
 опцию (только отметка, отметка и группы элементов; отметка и схемы отметки);


Dest. Измерение-приёмник, в
 который необходимо скопировать отметку, схемы отметки или группы элементов
 измерения-источника;


Replace. Параметр, определяющий
 будут ли сбрасываться отметка, схемы отметки или группы элементов, содержащиеся
 в приёмнике Dest при копировании.


## Описание


Метод CopyToEx осуществляет
 копирование опции, выбранной посредством параметра Options,
 из измерения-источника в измерение-приёмник.


## Комментарии


Отметка, схемы отметки или группы элементов, содержащиеся в приёмнике
 Dest, сбрасываются при копировании,
 если параметр Replace
 имеет значение True.


## Пример


Для выполнения примера в репозитории предполагается наличие табличного
 справочника НСИ с идентификатором «D_COPY_TO_EX» и содержащего группу
 элементов.


Добавьте ссылки на системные сборки: Dimensions, Metabase.


	Sub UserProc;

	Var

	    Mb: IMetabase;

	    dimension: IDimInstance;

	    sel1, sel2: IDimSelection;

	    group: IDimElementGroup;

	    Gp: IMetabaseObjectDescriptors;

	    i: integer;

	    Child: IMetabaseObjectDescriptor;

	Begin

	    // Получаем текущий репозиторий

	    Mb := MetabaseClass.Active;

	    // Получаем справочник

	    dimension := Mb.ItemById("D_COPY_TO_EX").Open(Null) As IDimInstance;

	    // Получаем дочерние объекты справочника

	    Gp := (dimension As IMetabaseObjectInstance).Object.Children;

	    // Перебираем все дочерние объекты справочника, чтобы найти группу элементов

	    For i := 0 To Gp.Count - 1 Do

	        Child := Gp.Item(i);

	        // Находим группу элементов

	        If Child.ClassId = MetabaseObjectClass.KE_CLASS_DIMELEMENTGROUP Then

	            group := Child.Bind As IDimElementGroup;

	            // Создаем отметки sel1 и sel2

	            sel1 := dimension.CreateSelection;

	            sel2 := dimension.CreateSelection;

	            // Выделяем в отметке группу элементов справочника

	            sel1.Group := group;

	            // Копируем отметку sel1 в отметку sel2 вместе с группой

	            sel1.CopyToEx(SelectionCopyToExOptions.WithGroup, sel2, False);

	        End If;

	    End For;

	End Sub UserProc;


После выполнения примера в отметку «sel2» будут добавлены отметка и
 группа элементов измерения-источника.


См. также:


[IDimSelection](IDimSelection.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
