# INeuralNetwork.ExportSynapses

INeuralNetwork.ExportSynapses
-


# INeuralNetwork.ExportSynapses


## Синтаксис


ExportSynapses: String;


## Описание


Метод ExportSynapses возвращает строковое представление сети.


## Комментарии


ExportSynapses может быть использован для хранения конфигурации сети. Например, полученное строковое представление сохранено в файл и применяется для создания сети при помощи метода [INeuralNetwork.CreateNetwork](INeuralNetwork.CreateNetwork.htm). Для загрузки из строкового представления только значений весов синапсов используйте [INeuralNetwork.ImportSynapses](INeuralNetwork.ImportSynapses.htm).


Использование метода приведено в примере для [INeuralNetwork.CreateNetworkEx](INeuralNetwork.CreateNetworkEx.htm).


См. также:


[INeuralNetwork](INeuralNetwork.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
