# INeuralNetwork.SetLearnRateEx

INeuralNetwork.SetLearnRateEx
-


# INeuralNetwork.SetLearnRateEx


## Синтаксис


SetLearnRateEx(newLearnRate: Double; layerIndex:
 Integer): Double;


## Параметры


newLearnRate.
 Значение коэффициента обучения.


layerIndex. Индекс слоя.


## Описание


Метод SetLearnRateEx устанавливает
 коэффициент обучения для указанного слоя.


## Комментарии


SetLearnRateEx возвращает значение
 предыдущего коэффициента обучения и применяется только для самоорганизующихся
 карт Кохонена.


Коэффициент обучения определяет: насколько быстро нейроны обучаются.
 Обычно, к концу обучения данный коэффициент стремится к нулю.


Индексация слоев сквозная и начинается с нуля.


## Пример


В качестве примера приведена функция, на вход которой подается самоорганизующаяся
 карта Кохонена (параметр Net).


Добавьте ссылки на системные сборки: IO, NN.


	Function m_LearnEx(Net: NeuralNetwork): NeuralNetwork;

	Var

	    epoch, learnRadius, layerCount, i: Integer;

	    learnRate: Double;

	    TextW: ITextWriter;

	Begin

	    TextW := File.OpenTextWriter("C:/LearnRes.txt", True);

	    TextW.Encoding := CodePage.UTF8;

	    layerCount := Net.GetNumberOfLayers;

	    For epoch := 1 To 100 Do

	        TextW.WriteLnString("Эпоха обучения '" + epoch.ToString + "'");

	        learnRate := 0.6 * ((300 - epoch) / 300);

	        learnRadius := (3 * ((300 - epoch) / 350)) As Integer;

	        For i := 0 To layerCount - 1 Do

	            TextW.WriteLnString("  Слой '" + i.ToString + "'");

	            TextW.WriteLnString("    текущий шаг обучения '" + Net.GetLearnRadius(i).ToString + "'");

	            TextW.WriteLnString("    новый шаг обучения '" + learnRadius.ToString + "'");

	            Net.SetLearnRadiusEx(learnRadius, i);

	            TextW.WriteLnString("    текущий коэффициент обучения '" + Net.GetLearnRate(i).ToString + "'");

	            TextW.WriteLnString("    новый коэффициент обучения '" + learnRate.ToString + "'");

	            Net.SetLearnRateEx(learnRate, i);

	            If Not Net.GetUseVectorScalar(i) Then

	                Net.SetUseVectorScalarEx(True, i);

	            End If;

	        End For;

	        Net.PropagateSOFM;

	        Net.LearnSOFM;

	        TextW.WriteLnString("  Код ошибки: " + Net.GetError.ToString);

	    End For;

	    TextW.Flush;

	    Return Net;

	End Function m_LearnEx;


После выполнения примера будет выполнено обучение сети. Для вычисления
 дистанции между нейронами будет использоваться алгоритм скалярного умножения
 векторов. Подробности и результаты обучения будут выведены в файл C:\LearnRes.txt.


См. также:


[INeuralNetwork](INeuralNetwork.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
