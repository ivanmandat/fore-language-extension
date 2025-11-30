# IWinApplicationParams.ParamIndex

IWinApplicationParams.ParamIndex
-


# IWinApplicationParams.ParamIndex


## Синтаксис


ParamIndex(Param: String): Integer;


## Параметры


Param. Наименование ключа. В качестве наименования может передаваться, либо зарезервированный ключ(-singleinstance, -splash, -customparam), либо любой пользовательский ключ, состоящий из сочетания "-" + <наименование ключа>.


## Описание


Свойство ParamIndex возвращает индекс ключа в массиве входных параметров, с которыми осуществлен запуск платформы. Наименование ключа передается в параметре Param.


См. также:


[IWinApplicationParams](IWinApplicationParams.htm)


[Запуск платформы из командной строки с использованием ключей](Setup.chm::/07_AK_Run_Additional/UseKeys.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
