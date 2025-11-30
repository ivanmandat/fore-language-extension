# IPivot.UseDataCache

IPivot.UseDataCache
-


# IPivot.UseDataCache


## Синтаксис


UseDataCache: Boolean;


## Описание


Свойство UseDataCache определяет
 признак использования кеша данных при работе с таблицей.


## Комментарии


Допустимые значения:


	- True. Кеширование данных
	 используется. В кеш будут попадать все данные, полученные из источника
	 в соответствии с указанной [отметкой](IPivot.Selection.htm).
	 При изменении отметки данные будут браться из кеша. Отсутствующие
	 данные будут извлекаться из источника данных и также кешироваться.


	- False. По умолчанию.
	 Кеширование данных не используется.


Примечание.
 Данные, полученные при агрегации на сервере, не кешируются.


## Пример


Для выполнения примера предполагается наличие формы, расположенных на
 ней двух кнопок с наименованиями «Button1» и «Button2», компонента TabSheetBox с наименованием «TabSheetBox1»,
 компонента UiErAnalyzer с наименованием
 «UiErAnalyzer1» и компонента ErAnalyzerDimPanel
 с наименованием «ErAnalyzerDimPanel1». К «UiErAnalyzer1» подключён экспресс-отчёт.


	Class TESTForm: Form

	    UiErAnalyzer1: UiErAnalyzer;

	    TabSheetBox1: TabSheetBox;

	    ErAnalyzerDimPanel1: ErAnalyzerDimPanel;

	    Button1: Button;

	    Button2: Button;

	    Pivot: IPivot;


	    Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	    Begin

	        Pivot := (UiErAnalyzer1.Instance As IEaxAnalyzer).Pivot;

	        Pivot.UseDataCache := True;

	    End Sub Button1OnClick;


	    Sub Button2OnClick(Sender: Object; Args: IMouseEventArgs);

	    Begin

	        If Pivot <> Null Then

	            Pivot.FlushDataCache;

	        End If;

	    End Sub Button2OnClick;


	End Class TESTForm;


После запуска формы при нажатии на кнопку «Button1» для таблицы экспресс-отчёта
 будет включено кеширование данных. Нажатие кнопки «Button2» вызовет очистку
 имеющихся кешированных данных.


См. также:


[IPivot](IPivot.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
