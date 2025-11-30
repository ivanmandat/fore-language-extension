# EaxAnalyzer.getIsPPSrvCreate

EaxAnalyzer.getIsPPSrvCreate
-


**


# EaxAnalyzer.getIsPPSrvCreate


## Синтаксис


getIsPPSrvCreate();


## Описание


Метод getIsPPSrvCreate** определяет, был ли создан экспресс-отчет при помощи сервиса [EaxMdService](../EaxMdService/EaxMdService.htm).


## Комментарии


Метод возвращает true, если данный отчёт создан через сервис PP.Exp.[EaxMdService](../EaxMdService/EaxMdService.htm), и false в противном случае.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [ExpressBox](../../../Components/Express/ExpressBox/ExpressBox.htm) с наименованием «expressBox» (см. «[Пример создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)»). Определим, был ли создан экспресс-отчет при помощи сервиса EaxMdService:


var eaxAnalyzer = expressBox.getSource();
if (eaxAnalyzer.getIsPPSrvCreate()) {
    console.log("Экспресс-отчет был создан при помощи сервиса EaxMdService.");
} else {
    console.log("Экспресс-отчет не был создан при помощи сервиса EaxMdService.");
};

В результате выполнения примера в консоли браузера было выведено сообщение о том, что экспресс-отчет был создан при помощи сервиса [EaxMdService](../EaxMdService/EaxMdService.htm).


См. также:


[EaxAnalyzer](EaxAnalyzer.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
