# Использование расширенных возможностей правила валидации «Сравнение по выражению»

Использование расширенных возможностей правила валидации «Сравнение по выражению»
-


# Использование расширенных возможностей правила валидации «Сравнение
 по выражению»


В правилах валидации «Сравнение по
 выражению» возможно использовать в расчете ряды из разных баз данных
 временных рядов, данные из разных календарных динамик и данные из разных
 ревизий. Существует ряд особенностей:


	- при использовании рядов из разных баз данных временных рядов:


	-


		- в выражениях для рядов должны быть указаны источники данных.
		 Если источник не указан, то будет использоваться текущая база
		 данных временных рядов, которая содержит валидацию. Например:
		 WEOProduction!BCA > BCA;


		- результаты валидации выгружаются в базу, содержащую валидацию;


		- в выражении можно использовать несколько различных баз данных
		 временных рядов для различных термов выражения;


		- при работе с рядным режимом (Ad-hoc), ряды из другой БД
		 ищутся в рядном режиме, если ряды не найдены, то данные будут
		 загружены из БД;


	- при использовании разных календарных динамик:


	-


		- в выражениях для рядов должна быть указана календарная динамика.
		 Если динамика не указана, то используется динамика фильтра валидации.
		 Например: BCA.A <> BCI.A;


		- динамика термов в выражении должна совпадать;


		- результаты валидации выгружаются на динамику, которая задана
		 в настройках валидации;


		- при работе с рядным режимом (Ad-hoc), ряды с указанной динамикой
		 ищутся в рядном режиме, если ряды не найдены, то правило вернет
		 ноль исключений;


		- при работе с функцией Collapse динамика входного терма должна
		 совпадать с динамикой валидации;


	- при использовании рядов из разных ревизий:


	-


		- в выражении можно использовать только большие ревизии (метки)
		 текущего каталога валидации. Для термов из других каталогов всегда
		 используются актуальные данные. Например: V1:X=V2:X, где – V1
		 это ревизия 1, а V2 это ревизия 2;


		- результаты валидации выгружаются на актуальные данные;


		- при работе с рядным режимом (Ad-hoc), ряды с указанной ревизией
		 ищутся в рядном режиме, если ряды не найдены, то данные будут
		 загружены из БД.


Для выполнения примера необходимо:


	- правило валидации «Сравнение
	 по выражению» с ключом «111». Валидация имеет годовую динамику;


	- база данных временных рядов с ключом «333». Данная база не содержит
	 валидацию, указанную выше;


	- форма с компонентом MetaAttributesBreadcrumb, имеющим идентификатор
	 MetaAttributesBreadcrumb1. MetaAttributesBreadcrumb настроен на базу
	 данных временных рядов, указанную выше;


	- База содержит два атрибута показателей «Страна» и «Показатель».
	 Перед запуском примера выберите данные атрибуты в MetaAttributesBreadcrumb.


Расчет будет настроен на формулу:


{RussiaPavel!Argentina|NGDP_D.Q} <> collapse({Argentina|NGDP_D.Q:LastRevision}, MsCollapseType.Average, MsFrequency.Annual)


Где:


	- RussiaPavel. Идентификатор базы данных временных рядов с ключом
	 «333»;


	- Argentina. Первый элемент справочника, на который ссылается
	 атрибут «Страна»;


	- NGDP_D. Первый элемент справочника, на который ссылается атрибут «Показатель».


Добавьте ссылки на системные сборки: Cubes, Dimensions, Forms, Metabase,
 Ms, Rds.


	Sub UserProc;

	Var

	    mb: IMetabase;

	    filter: IValidationFilter;

	    customV: IValidationCustom;

	    Transform: IMsFormulaTransform;

	    variable: IMsFormulaTransformVariable;

	    dimSelection: IDimSelection;

	    metaAttribute: IMetaAttribute;

	    attrVal: IMsMetaAttributeValue;

	    rub: IRubricator;

	    BreadcrumbItems: IBreadcrumbItems;

	    Slices: IMsFormulaTransformSlices;

	Begin

	    mb := MetabaseClass.Active;

	    // получаем правило
	 валидации по его ключу

	    filter := mb.Item(111).Edit As IValidationFilter;

	    customV := filter.Details As IValidationCustom;

	    // переменная из другой
	 базы

	    Transform := customV.Transform;

	    variable := Transform.Inputs.Item(0);

	    rub := mb.Item(333).Bind As IRubricator;

	    // меняем источник
	 данных переменной

	    variable.SetStub(rub As IVariableStub);

	    // так как источник
	 данных изменился, надо перенастроить отметку переменной

	    // устанавливаем
	 первый элемент справочника, на который ссылается атрибут «Страна»

	    BreadcrumbItems := MetaAttributesBreadcrumb1.Items;

	    metaAttribute := (BreadcrumbItems.Item(0) As IMetaAttributeBreadcrumbItem).MetaAttribute;

	    dimSelection := MetaAttributesBreadcrumb1.GetAttributeValue(metaAttribute);

	    Slices := variable.Slices;

	    Slices.Item(0).Selection.Item(0).DeselectAll;

	    Slices.Item(0).Selection.Item(0).SelectElement(dimSelection.Element(0), False);

	    //  устанавливаем
	 первый элемент справочника, на который ссылается атрибут «Показатель»

	    metaAttribute := (BreadcrumbItems.Item(1) As IMetaAttributeBreadcrumbItem).MetaAttribute;

	    dimSelection := MetaAttributesBreadcrumb1.GetAttributeValue(metaAttribute);

	    Slices.Item(0).Selection.Item(1).DeselectAll;

	    Slices.Item(0).Selection.Item(1).SelectElement(dimSelection.Element(0), False);

	    // устанавливаем
	 квартальную динамику

	    Slices.Item(0).MetaAttributeValueList.Clear;

	    metaAttribute := rub.Facts.Attributes.FindByKind(MetaAttributeKind.CalendarLevel);

	    attrVal := Slices.Item(0).MetaAttributeValueList.Add(metaAttribute);

	    attrVal.Value := DimCalendarLevel.Quarter;

	    // переменная с
	 установленной динамикой и ревизией, но из текущей базы

	    rub := variable.VariableStub As IRubricator;

	    variable := Transform.Inputs.Item(1);

	    Slices.Item(0).MetaAttributeValueList.Clear;

	    // устанавливаем
	 квартальную динамику

	    metaAttribute := rub.Facts.Attributes.FindByKind(MetaAttributeKind.CalendarLevel);

	    attrVal := Slices.Item(0).MetaAttributeValueList.Add(metaAttribute);

	    attrVal.Value := DimCalendarLevel.Quarter;

	    // устанавливаем
	 ревизию на последнюю перед актуальными данными, поэтому
	 передаем значение «-1»

	    metaAttribute := rub.Facts.Attributes.FindByKind(MetaAttributeKind.Revision);

	    attrVal := Slices.Item(0).MetaAttributeValueList.Add(metaAttribute);

	    attrVal.Value := -1;

	    // сохраняем правило
	 валидации

	    (filter As IMetabaseObject).Save;

	End Sub UserProc;


После выполнения примера параметры расчета правила валидации «Сравнение по выражению» будут изменены.


См. также:


[Примеры](KeMs_Sample.htm)


[IValidationCustom](../Interface/IValidationCustom/IValidationCustom.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
