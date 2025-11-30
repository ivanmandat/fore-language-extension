# CultureInfo.Create

CultureInfo.Create
-


# CultureInfo.Create


## Синтаксис


Create(LCID: Integer);


## Параметры


LCID. Идентификатор языка и
 региональных параметров. В качестве значения параметра указывается одно
 из значений перечисления [LocaleCodeID](../../Enums/LocaleCodeID.htm).


## Описание


Конструктор Create инициализирует
 настройки языка и региональных стандартов, идентификатор которых передается
 в качестве входного параметра LCID.


## Пример


	Sub UserProc;

	Var

	    CF: ICultureInfo;

	Begin

	    CF := New CultureInfo.Create(LocaleCodeID.English_UnitedStates);

	    Debug.WriteLine(CF.Language);

	End Sub UserProc;


При выполнении примера в консоль среды разработки будут выведены наименование
 языка указанной культуры.


См. также:


[CultureInfo](CultureInfo.htm) | [LocaleCodeID](../../Enums/LocaleCodeID.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
