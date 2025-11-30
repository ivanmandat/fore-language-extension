# EaxParameterBox.getService

EaxParameterBox.getService
-


**


# EaxParameterBox.getService


## Синтаксис


getService();


## Описание


Метод getService** возвращает сервис для работы с экспресс-отчетами.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [EaxParameterBox](EaxParameterBox.htm) с наименованием «examplePar» (см. [Пример создания компонента EaxParameterBox](../../../Components/Express/EaxParameterBox/EaxParameterBox_Example.htm)). Обработаем событие [Saved](../EaxMdService/EaxMdService.Saved.htm) у сервиса для работы с экспресс-отчетами, полученного через контейнер параметра экспресс-отчета:


// Получаем сервис для работы экспресс-отчетами
var service = examplePar.getService();
// Обрабатываем событие Saved сервиса
service.Saved.add(
    function () {
        alert("Saved.");
        }
);

В результате выполнения примера после каждого наступления события [Saved](../EaxMdService/EaxMdService.Saved.htm) у сервиса для работы с экспресс-отчетами в браузере будет выводиться соответствующее сообщение.


См. также:


[EaxParameterBox](EaxParameterBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
