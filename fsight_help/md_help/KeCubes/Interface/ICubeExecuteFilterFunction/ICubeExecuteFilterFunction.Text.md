# ICubeExecuteFilterFunction.Text

ICubeExecuteFilterFunction.Text
-


# ICubeExecuteFilterFunction.Text


## Синтаксис


Text: String;


## Описание


Свойство Text определяет текст
 функции, который будет встраиваться в MDX-запрос и использоваться для
 фильтрации данных.


## Комментарии


Если фильтрация настраивается путем приведения к интерфейсу, отвечающему
 за выбранный тип функции ([ICubeExecuteFilterFunctionTop](../ICubeExecuteFilterFunctionTop/ICubeExecuteFilterFunctionTop.htm),
 [ICubeExecuteFilterFunctionFilter](../ICubeExecuteFilterFunctionFilter/ICubeExecuteFilterFunctionFilter.htm),
 [ICubeExecuteFilterFunctionOrder](../ICubeExecuteFilterFunctionOrder/ICubeExecuteFilterFunctionOrder.htm)
 или [ICubeExecuteFilterFunctionNonEmpty](../ICubeExecuteFilterFunctionNonEmpty/ICubeExecuteFilterFunctionNonEmpty.htm)),
 и указания там необходимых настроек, то свойство Text
 вернет сформированный на базе этих настроек блок MDX-запроса.


Если необходимый текст функции, который позволяет отфильтровать данные,
 известен, то его можно напрямую указать в свойстве Text.


См. также:


[ICubeExecuteFilterFunction](ICubeExecuteFilterFunction.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
