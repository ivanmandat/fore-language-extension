# IUiMetabaseObject.OperationMode

IUiMetabaseObject.OperationMode
-


# IUiMetabaseObject.OperationMode


## Синтаксис


OperationMode: [UiMetabaseObjectOperationMode](../../Enums/UiMetabaseObjectOperationMode.htm);


## Описание


Свойство OperationMode определяет
 режим подключения объекта.


## Комментарии


Если свойству установлено значение External, то
 в свойстве [Instance](IUiMetabaseObject.Instance.htm)
 необходимо указать открытый экземпляр объекта. При [активации](IUiMetabaseObject.Active.htm)
 компонента указанный объект не будет переоткрыт, он будет доступен в том
 виде, в каком находится в текущий момент.


## Пример 1


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1», компонента UiErAnalyzer
 с наименованием «UiErAnalyzer1». В «UiErAnalyzer1» загружен какой-либо
 экспресс-отчет. Также на форме расположены компоненты, используемые для
 редактирования экспресс-отчета.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    MB: IMetabase;

	    CrInfo: IMetabaseObjectCreateInfo;

	    ExspressReport: IEaxAnalyzer;

	Begin

	    If UiErAnalyzer1.OperationMode = UiMetabaseObjectOperationMode.Open Then

	        MB := MetabaseClass.Active;

	        CrInfo := MB.CreateCreateInfo;

	        CrInfo.ClassId := MetabaseObjectClass.KE_CLASS_EXPRESSREPORT;

	        CrInfo.Id := "Copy_" + UiErAnalyzer1.Object.Id;

	        CrInfo.Parent := MB.Root;

	        ExspressReport := MB.CreateObject(CrInfo).Edit As IEaxAnalyzer;

	        ExspressReport.CopyFrom(UiErAnalyzer1.Instance As IEaxAnalyzer);

	        (ExspressReport As IMetabaseObject).Save;

	    Else

	        (UiErAnalyzer1.Instance As IMetabaseObject).Save;

	    End If;

	End Sub Button1OnClick;


При нажатии на кнопку если отчет, загруженный в «UiErAnalyzer1», подключен
 без возможности сохранения изменений в исходный объект, то в корневом
 каталоге репозитория будет создана и сохранена копия отчета со всеми внесенными
 изменениями.


## Пример 2


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1», компонента UiErAnalyzer
 с наименованием «UiErAnalyzer1». Также на форме расположены компоненты,
 используемые для редактирования экспресс-отчета.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    ExpressReport: IEaxAnalyzer;

	Begin

	    //...

	    ExpressReport := //...Получение
	 экземпляра открытого экспресс-отчета

	    //...

	    //Различные действия по предварительной настройке экспресс-отчета

	    //...

	    //Подключение отчета для доступа к нему на форме

	    UiErAnalyzer1.OperationMode := UiMetabaseObjectOperationMode.External;

	    UiErAnalyzer1.Instance := ExpressReport;

	    UiErAnalyzer1.Active := True;

	End Sub Button1OnClick;


Указанный пример в общем виде демонстрирует режим подключения объекта
 External на примере
 подключения открытого экземпляра экспресс-отчета. При установке
 свойству Active значения True отчет переоткрыт не будет.


См.
 также:


[IUiMetabaseObject](IUiMetabaseObject.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
