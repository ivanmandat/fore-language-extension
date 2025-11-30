# ICultureInfo.Currency

ICultureInfo.Currency
-


# ICultureInfo.Currency


## Синтаксис


Currency: String;


## Описание


Свойство Currency возвращает
 обозначение денежной единицы.


## Пример


	Sub UserProc;

	Var

	    CF: ICultureInfo;

	Begin

	    CF := CultureInfo.Specific(LocaleCodeID.Russian);

	    Debug.WriteLine(CF.Currency);

	    CF := CultureInfo.Specific(LocaleCodeID.English_UnitedStates);

	    Debug.WriteLine(CF.Currency);

	    CF := CultureInfo.Specific(LocaleCodeID.English_UnitedKingdom);

	    Debug.WriteLine(CF.Currency);

	End Sub UserProc;


При выполнении примера в консоль среды разработки будут выведены обозначения
 денежных единиц России, США и Великобритании.


См. также:


[ICultureInfo](ICultureInfo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
