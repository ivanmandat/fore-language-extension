# ICultureInfoClass.Specific

ICultureInfoClass.Specific
-


# ICultureInfoClass.Specific


## Синтаксис


Specific(LCID: Integer): [ICultureInfo](../ICultureInfo/ICultureInfo.htm);


## Параметры


LCID. Идентификатор культуры,
 настройки которой необходимо получить.


## Описание


Свойство Specific возвращает
 настройки культуры, идентификатор которой передается посредством параметра
 LCID.


## Комментарии


В качестве значения параметра LCID
 укажите одно из значений перечисления [LocaleCodeID](../../Enums/LocaleCodeID.htm).


## Пример


	Sub UserProc;

	Var

	    CF: ICultureInfo;

	Begin

	    CF := CultureInfo.Specific(LocaleCodeID.Czech);

	    Debug.WriteLine(CF.NativeCountry);

	    Debug.WriteLine(CF.NativeLanguage);

	End Sub UserProc;


При выполнении примера будет получены настройки для чешской культуры.
 Наименование страны и языка этой культуры будут выведены в консоль среды
 разработки на чешском языке.


См. также:


[ICultureInfoClass](ICultureInfoClass.htm)
 | [LocaleCodeID](../../Enums/LocaleCodeID.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
