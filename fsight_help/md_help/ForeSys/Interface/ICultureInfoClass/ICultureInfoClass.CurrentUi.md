# ICultureInfoClass.CurrentUi

ICultureInfoClass.CurrentUi
-


# ICultureInfoClass.CurrentUi


## Синтаксис


CurrentUi: [ICultureInfo](../ICultureInfo/ICultureInfo.htm);


## Описание


Свойство CurrentUi возвращает
 культуру визуального интерфейса приложения.


## Комментарии


Данное свойство вернет тот язык и региональные параметры, которые заданы
 в [языковых
 параметрах](GetStarted.chm::/Interface/Intro_Language.htm)
 продукта «Форсайт. Аналитическая платформа».


## Пример


			Sub UserProc;

Var

    CF: ICultureInfo;

Begin

    CF := CultureInfo.CurrentUi;

    Debug.WriteLine(CF.Language);

    Debug.WriteLine(CF.LCID);

End Sub UserProc;


При выполнении примера в окно консоли будут выведены наименование и
 идентификатор языка и региональных параметров визуального интерфейса приложения.


См. также:


[ICultureInfoClass](ICultureInfoClass.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
