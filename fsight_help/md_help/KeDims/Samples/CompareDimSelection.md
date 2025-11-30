# Сравнение отметок справочников

Сравнение отметок справочников
-


# Сравнение отметок справочников


Для работы с отметкой справочников предназначен интерфейс [IDimSelection](../interface/IDimSelection/IDimSelection.htm).


Для отметки справочников доступны следующие операции сравнения: сравнение
 на равенство и на неравенство. Данные виды сравнения могут применяться
 для:


	- сравнения по отметке;


	- сравнения с числом.
	 Выполняется по ключу элемента в справочнике;


	- сравнения со строкой.
	 Выполняется по строковому представлению ключа элемента в справочнике.


Ниже приведены примеры различных вариантов сравнения отметок.


## Требования для выполнения примеров


Для выполнения примеров в репозитории предполагается наличие табличных
 справочников с идентификаторами «COUNTRY_OLD» и «COUNTRY_NEW». Справочник
 «COUNTRY_OLD» содержит элементы «Россия», «Германия», «Франция», а справочник
 «COUNTRY_NEW» - элементы «Россия», «Германия», «Франция», «Италия».


Добавьте ссылки на системные сборки: Dimensions, Metabase.


[![](../Opened.gif)![](../Closed.gif)Сравнение на
 равенство и неравенство](javascript:TextPopup(this))


	Выполняется сравнение полной отметки справочников. Результаты сравнения
	 выводятся в окно консоли.


		Sub EqualityInequality;

		Var

		    mb: IMetabase;

		    CountryOld, CountryNew: IDimInstance;

		    SelCountryOld, SelCountryNew: IDimSelection;

		Begin

		    // Получаем текущий репозиторий

		    mb := MetabaseClass.Active;

		    // Получаем справочники

		    CountryOld := mb.ItemById("COUNTRY_OLD").Open(Null) As IDimInstance;

		    CountryNew := mb.ItemById("COUNTRY_NEW").Open(Null) As IDimInstance;

		    // Создаем отметку справочников

		    SelCountryOld := CountryOld.CreateSelection;

		    SelCountryNew := CountryNew.CreateSelection;

		    // Выделяем все элементы справочников

		    SelCountryOld.SelectAll;

		    SelCountryNew.SelectAll;

		    // Выводим отметку элементов в окно консоли

		    Debug.WriteLine("Отметка справочника '" + CountryOld.Name + "':");

		    Debug.WriteLine("    " + SelCountryOld.ToString);

		    Debug.WriteLine("Отметка справочника '" + CountryNew.Name + "':");

		    Debug.WriteLine("    " + SelCountryNew.ToString);

		    // Выполняем сравнение на равенство и выводим результаты в окно консоли

		    If SelCountryOld = SelCountryNew

		        Then Debug.WriteLine("Отметка справочников совпадает");

		        Else Debug.WriteLine("Отметка справочников отличается");

		    End If;

		    // Выполняем сравнение на неравенство и выводим результаты в окно консоли

		    If SelCountryOld <> SelCountryNew

		        Then Debug.WriteLine("Отметка справочников отличается");

		        Else Debug.WriteLine("Отметка справочников совпадает");

		    End If;

		End Sub EqualityInequality;


[![](../Opened.gif)![](../Closed.gif)Сравнение с
 числом](javascript:TextPopup(this))


	Выполняется сравнение отметки справочника с числом, соответствующим
	 ключу элемента справочника. Результаты сравнения выводятся в окно
	 консоли.


		Sub CompareWithNumber;

		Var

		    mb: IMetabase;

		    CountryOld, CountryNew: IDimInstance;

		    SelCountryOld, SelCountryNew: IDimSelection;

		Begin

		    // Получаем текущий репозиторий

		    mb := MetabaseClass.Active;

		    // Получаем справочники

		    CountryOld := mb.ItemById("COUNTRY_OLD").Open(Null) As IDimInstance;

		    CountryNew := mb.ItemById("COUNTRY_NEW").Open(Null) As IDimInstance;

		    // Создаем отметку справочников

		    SelCountryOld := CountryOld.CreateSelection;

		    SelCountryNew := CountryNew.CreateSelection;

		    // Выделяем по одному элементу справочников

		    SelCountryOld.SelectElement(1, False);


		    SelCountryNew.SelectElement(2, False);

		    // Выводим отметку элементов и ключи выделенных элементов в окно консоли

		    Debug.WriteLine("Отметка справочника '" + CountryOld.Name + "':");

		    Debug.WriteLine("  - элемент: '" + SelCountryOld.ToString + "', ключ: " +

		        CountryOld.Elements.Id(1));

		    Debug.WriteLine("Отметка справочника '" + CountryNew.Name + "':");

		    Debug.WriteLine("  - элемент: '" + SelCountryNew.ToString + "', ключ: " +

		        CountryNew.Elements.Id(2));


		    // Выполняем сравнение отметок с числом «1»

		    If SelCountryOld.ToVariant = 1

		        Then Debug.WriteLine("Отметка справочника '" + CountryOld.Name + "' совпадает");

		        Else Debug.WriteLine("Отметка справочника '" + CountryOld.Name + "' отличается");

		    End If;

		    If SelCountryNew.ToVariant = 1

		        Then Debug.WriteLine("Отметка справочника '" + CountryNew.Name + "' совпадает");

		        Else Debug.WriteLine("Отметка справочника '" + CountryNew.Name + "' отличается");

		    End If;

		End Sub CompareWithNumber;


[![](../Opened.gif)![](../Closed.gif)Сравнение со
 строкой](javascript:TextPopup(this))


	Выполняется сравнение отметки справочника со строкой, соответствующей
	 ключу элемента справочника. Результаты сравнения выводятся в окно
	 консоли.


		Sub CompareWithString;

		Var

		    mb: IMetabase;

		    CountryOld, CountryNew: IDimInstance;

		    SelCountryOld, SelCountryNew: IDimSelection;

		Begin

		    // Получаем текущий репозиторий

		    mb := MetabaseClass.Active;

		    // Получаем справочники

		    CountryOld := mb.ItemById("COUNTRY_OLD").Open(Null) As IDimInstance;

		    CountryNew := mb.ItemById("COUNTRY_NEW").Open(Null) As IDimInstance;

		    // Создаем отметку справочников

		    SelCountryOld := CountryOld.CreateSelection;

		    SelCountryNew := CountryNew.CreateSelection;

		    // Выделяем по одному элементу справочников

		    SelCountryOld.SelectElement(1, False);

		    SelCountryNew.SelectElement(2, False);

		    // Выводим отметку элементов и ключи выделенных элементов в окно консоли

		    Debug.WriteLine("Отметка справочника '" + CountryOld.Name + "':");

		    Debug.WriteLine("Отметка справочника '" + CountryOld.Name + "':");

		    Debug.WriteLine("  - элемент: '" + SelCountryOld.ToString + "', ключ: " +

		        CountryOld.Elements.Id(1));


		    Debug.WriteLine("Отметка справочника '" + CountryNew.Name + "':");

		    Debug.WriteLine("  - элемент: '" + SelCountryNew.ToString + "', ключ: " +

		        CountryNew.Elements.Id(2));

		    // Выполняем сравнение отметок со строкой «1»

		    If SelCountryOld.ToVariant = "1"

		        Then Debug.WriteLine("Отметка справочника '" + CountryOld.Name + "' совпадает");

		        Else Debug.WriteLine("Отметка справочника '" + CountryOld.Name + "' отличается");

		    End If;

		    If SelCountryNew.ToVariant = "1"

		        Then Debug.WriteLine("Отметка справочника '" + CountryNew.Name + "' совпадает");

		        Else Debug.WriteLine("Отметка справочника '" + CountryNew.Name + "' отличается");

		    End If;

		End Sub CompareWithString;


См. также:


[Примеры](KeDims_Sample.htm) | [IDimSelection](../interface/IDimSelection/IDimSelection.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
