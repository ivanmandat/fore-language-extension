# INeuralNetwork.ImportSynapses

INeuralNetwork.ImportSynapses
-


# INeuralNetwork.ImportSynapses


## Синтаксис


ImportSynapses(synapsysData: String): Boolean;


## Параметры


synapsysData. Строковое представление
 значений весов синапсов.


## Описание


Метод ImportSynapses загружает
 значения весов синапсов из строкового представления.


## Комментарии


Метод возвращает результат выполнения.
 Допустимые значения:


	- True. Значения весов
	 синапсов загружены успешно;


	- False.
	 При выполнении метода произошла ошибка. Значения весов синапсов не
	 загружены.


Значения весов могут быть загружены из строкового представления сети,
 возвращаемого методом [INeuralNetwork.ExportSynapses](INeuralNetwork.ExportSynapses.htm).
 В отличие от метода [INeuralNetwork.CreateNetwork](INeuralNetwork.CreateNetwork.htm)
 данный метод загружает только значения весов синапсов. Это значит, что
 сеть уже должна быть создана.


## Пример


Для выполнения примера предполагается наличие в файловой системе файла
 «C:\NetDefenition.txt», содержащего строковое представление нейронной
 сети. Файл представлен в кодировке UTF-8.


Добавьте ссылки на системные сборки: IO, NN.


	Function m_ImportSynapses(Net: NeuralNetwork): Boolean;

	Var

	    NetFile: File;

	    TextR: ITextReader;

	    SynVal: String;

	    res: Boolean;

	Begin

	    NetFile := New File.Create;

	    TextR := NetFile.OpenTextReader("C:/NetDefenition.txt");

	    TextR.Encoding := CodePage.UTF8;

	    Repeat

	        SynVal := SynVal + TextR.ReadLine + " ";

	    Until TextR.Eof;

	    res := Net.ImportSynapses(SynVal);

	    If res Then

	        WinApplication.ErrorBox("Загрузка значений весов синапсов завершена!");

	    Else

	        WinApplication.ErrorBox("Ошибка при загрузке значений весов синапсов!");

	    End If;

	    Return res;

	End Function m_ImportSynapses;


Данная функция производит загрузку значений весов синапсов из файла
 «C:\NetDefenition.txt».


См. также:


[INeuralNetwork](INeuralNetwork.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
