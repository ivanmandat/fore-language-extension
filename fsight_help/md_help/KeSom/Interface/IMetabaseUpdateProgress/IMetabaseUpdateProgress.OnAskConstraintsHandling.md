# IMetabaseUpdateProgress.OnAskConstraintsHandling

IMetabaseUpdateProgress.OnAskConstraintsHandling
-


# IMetabaseUpdateProgress.OnAskConstraintsHandling


## Синтаксис


OnAskConstraintsHandling(


Node: [IMetabaseUpdateNode](../IMetabaseUpdateNode/IMetabaseUpdateNode.htm);


Details: String;


Var Handling: [UpdateDataConstraintsHandlingType](../../Enums/UpdateDataConstraintsHandlingType.htm));


## Параметры


Node. Объект обновления, для
 которого сгенерировано событие.


Details. Информация об ошибке.


Handling. Переменная, определяющая
 способ обработки ограничения целостности.


## Описание


Метод OnAskConstraintsHandling
 реализует событие, возникающее при необходимости обработать ограничение
 целостности данных обновляемого объекта. Данное событие генерируется во
 время применения обновления.


## Пример


Для выполнения примера предполагается наличие файла обновления с наименованием
 "NSIDictionary.pef". Данное обновление содержит информацию о
 справочнике НСИ.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MUpdate: IMetabaseUpdate;

	    Progress: MyUpdateProgress;

	Begin

	    MB := MetabaseClass.Active;

	    MUpdate := MB.CreateUpdate;

	    MUpdate.LoadFromFile("c:\NSIDictionary.pef");

	    Progress := New MyUpdateProgress.Create;

	    MUpdate.Apply(Progress);

	End Sub UserProc;


	Class MyUpdateProgress: UpdateProgress

	    Sub OnAskConstraintsHandling(Node: IMetabaseUpdateNode; Details: String; Var Handling: UpdateDataConstraintsHandlingType);

	    Begin

	        Handling := UpdateDataConstraintsHandlingType.KeepTableUnchanged;

	    End Sub OnAskConstraintsHandling;


	    Sub OnProgress(Data: IMetabaseUpdateProgressData);

	    Begin

	    Select Case Data.Stage

	        Case MetabaseUpdateProgressStage.Start: Debug.WriteLine("Начало обновления объектов");

	        Case MetabaseUpdateProgressStage.Prepare: Debug.WriteLine("Подготовка объекта");

	        Case MetabaseUpdateProgressStage.Apply: Debug.WriteLine("Обновление объекта");

	        Case MetabaseUpdateProgressStage.Finish: Debug.WriteLine("Обновление объектов завершено");

	    End Select;

	    Debug.WriteLine("Текущее " + Data.Current.ToString + " из " + Data.Total.ToString + " Объект " + Data.Node.Label);

	    End Sub OnProgress;

	End Class MyUpdateProgress;


После выполнения примера будет осуществлено обновление справочника НСИ
 из файла обновления "NSIDictionary.pef". Для обработки событий,
 возникающих во время обновления, используется пользовательский класс "MyUpdateProgress".
 Статус выполнения обновления будет выведен в консоль среды разработки.
 Если в справочнике-приёмнике существуют элементы, на которые имеются ссылки
 и которые отсутствуют в обновлении, обновление справочника производиться
 не будет.


См. также:


[IMetabaseUpdateProgress](IMetabaseUpdateProgress.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
