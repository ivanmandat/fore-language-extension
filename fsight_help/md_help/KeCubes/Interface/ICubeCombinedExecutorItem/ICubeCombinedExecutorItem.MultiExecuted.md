# ICubeCombinedExecutorItem.MultiExecuted

ICubeCombinedExecutorItem.MultiExecuted
-


# ICubeCombinedExecutorItem.MultiExecuted


## Синтаксис


		MultiExecuted: Boolean;


## Описание


Свойство MultiExecuted возвращает
 признак получения текущего результата при параллельном расчёте.


## Комментарии


Свойство возвращает значение True,
 если результат был получен при параллельном расчёте и False
 - при последовательном расчёте.


Для того, чтобы был произведён параллельный расчёт, куб должен соответствовать
 тем требованиям, которые представлены в описании интерфейса [ICubeCombinedExecutor](../ICubeCombinedExecutor/ICubeCombinedExecutor.htm).


## Пример


Пример использования приведён в описании методов [ICubeCombinedExecutor.AddCube](../ICubeCombinedExecutor/ICubeCombinedExecutor.AddCube.htm),
 [ICubeCombinedExecutor.AddCubeDest](../ICubeCombinedExecutor/ICubeCombinedExecutor.AddCubeDest.htm).


См. также:


[ICubeCombinedExecutorItem](ICubeCombinedExecutorItem.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
