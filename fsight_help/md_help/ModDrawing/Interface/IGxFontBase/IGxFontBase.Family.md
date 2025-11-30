# IGxFontBase.Family

IGxFontBase.Family
-


# IGxFontBase.Family


## Синтаксис


Family: String;


## Описание


Свойство Family возвращает
 название шрифта.


## Комментарии


Для получения размера шрифта используйте свойство [IGxFontBase.Size](IGxFontBase.Size.htm).


## Пример


Для выполнения примера в репозитории необходимо наличие регламентного
 отчета с идентификатором REG_REPORT, в котором первая ячейка должна быть
 заполнена любыми данными.


Добавьте ссылки на системные сборки: Drawing, Metabase, Report, Tab.


	Sub UserProc;

	Var

	    Mb: IMetaBase;

	    Report: IPrxReport;

	    Range: ITabRange;

	    Font: IGxFontBase;

	    Family, Style: String;

	    Size: Double;

	Begin

	    // Открываем регламентный отчет для редактирования

	    Mb := MetabaseClass.Active;

	    Report := Mb.ItemById("REG_REPORT").Edit As IPrxReport;

	    // Получаем первую ячейку регламентного отчета

	    Range := (Report.Activesheet As IPrxTable).TabSheet.Cell(0, 0);

	    // Получаем шрифт первой ячейки

	    Font := Range.Style.Font.AsGxFont;

	    // Выводим в окно консоли название шрифта

	    Family := Font.Family;

	    Debug.WriteLine("Название шрифта: " + Family);

	    // Выводим в окно консоли размер шрифта

	    Size := Font.Size;

	    Debug.WriteLine("Размер шрифта = " + Size.ToString);

	    // Выводим в окно консоли стиль шрифта

	    Style := Font.Style.ToString;

	    Debug.WriteLine("Стиль шрифта: " + Style);

	End Sub UserProc;


После выполнения примера в окно консоли будут выведены базовые параметры
 шрифта.


См. также:


[IGxFontBase](IGxFontBase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
