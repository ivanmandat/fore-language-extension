# INeuralNetwork.LearnSOFM

INeuralNetwork.LearnSOFM
-


# INeuralNetwork.LearnSOFM


## Синтаксис


LearnSOFM;


## Описание


Метод LearnSOFM выполняет обучение
 самоорганизующейся карты Кохонена.


## Комментарии


В процессе обучения корректируются значения весов синапсов.


Краткий алгоритм обучения:


	- выбор входного вектора сети (набора входных данных);


	- нормализация входных значений (при необходимости). Используйте
	 методы [INeuralNetwork.NormalizeInputValues](INeuralNetwork.NormalizeInputValues.htm),
	 [INeuralNetwork.NormalizeInputValuesEx](INeuralNetwork.NormalizeInputValuesEx.htm);


	- вызов метода [INeuralNetwork.PropagateSOFM](INeuralNetwork.PropagateSOFM.htm)
	 для вычисления расстояния между нейронами во в выбранном входном векторе;


	- вызов метода LearnSOFM.
	 Данный метод определит «победителя» и его соседей, затем изменит веса
	 их синапсов;


	- определение ошибки карты. Используйте метод [INeuralNetwork.GetError](INeuralNetwork.GetError.htm).


Процесс обучения можно повторять несколько раз. Одна итерация называется
 эпохой обучения.


## Пример


В качестве примера приведена функция, на вход которой подается самоорганизующаяся
 карта Кохонена (параметр Net).


Добавьте ссылки на системные сборки: IO, NN.


	Function m_Learn(Net: NeuralNetwork): NeuralNetwork;

	Var

	    epoch, learnRadius: Integer;

	    learnRate: Double;

	    TextW: ITextWriter;

	Begin

	    TextW := File.OpenTextWriter("C:\LearnRes.txt", True);

	    TextW.Encoding := CodePage.UTF8;

	    For epoch := 1 To 300 Do

	        learnRate := 0.6 * ((300 - epoch) / 300);

	        learnRadius := (3 * ((300 - epoch) / 350)) As Integer;

	        Net.SetLearnRadius(learnRadius);

	        Net.SetLearnRate(learnRate);

	        Net.SetUseVectorScalar(True);

	        Net.PropagateSOFM;

	        Net.LearnSOFM;

	        TextW.WriteLnString("Эпоха обучения '" + epoch.ToString + "'. Код ошибки: " + Net.GetError.ToString);

	    End For;

	    TextW.Flush;

	    Return Net;

	End Function m_Learn;


После выполнения примера будет выполнено обучение сети. Для вычисления
 дистанции между нейронами будет использоваться алгоритм скалярного умножения
 векторов. Результаты будут выведены в файл C:\LearnRes.txt.


См. также:


[INeuralNetwork](INeuralNetwork.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
