# IPivot.HasScaledData

IPivot.HasScaledData
-


# IPivot.HasScaledData


## Синтаксис


HasScaledData: Boolean;


## Описание


Свойство HasScaledData возвращает
 признак учёта единиц измерения при условном форматировании.


## Комментарии


Допустимые значения:


	- True. При условном форматировании
	 учитываются единицы измерения;


	- False. При условном
	 форматировании не учитываются единицы измерения.


## Пример


Для выполнения примера предполагается наличие экспресс-отчёта с идентификатором
 EXPRESS.


Добавьте ссылки на системные сборки: Metabase, Express, Pivot.


					Sub UserProc;

		Var

		    Metabase: IMetabase;

		    Express: IEaxAnalyzer;

		    Pivot: IPivot;

		Begin

		    Metabase := MetabaseClass.Active;

		    Express := Metabase.ItemById("EXPRESS").Bind As IEaxAnalyzer;

		    // Получим таблицу экспресс-отчета

		    Pivot := Express.Pivot;

		    If Pivot.HasScaledData = True Then

		        Debug.WriteLine("При условном форматировании учитываются единицы измерения");

		    Else

		        Debug.WriteLine("При условном форматировании не учитываются единицы измерения");

		    End If;

		End Sub UserProc;


В результате выполнения примера в окно консоли будет выведен признак
 учёта единиц измерения при условном форматировании.


См. также:


[IPivot](IPivot.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
