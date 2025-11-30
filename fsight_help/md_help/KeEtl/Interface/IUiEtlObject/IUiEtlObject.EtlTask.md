# IUiEtlObject.EtlTask

IUiEtlObject.EtlTask
-


# IUiEtlObject.EtlTask


## Синтаксис


EtlTask: [IEtlTask](../IEtlTask/IEtlTask.htm);


## Описание


Свойство EtlTask определяет
 задачу ETL репозитория, к которой необходимо получить доступ.


## Пример


Для выполнения примера предполагается наличие формы и расположенных
 на ней компонентов UiEtlObject с наименованием «UiEtlObject1», EtlBox
 с наименованием «EtlBox1» и EtlObjectPanelBox с наименованием «EtlObjectPanelBox1».
 В репозитории создана задача ETL с идентификатором «ETLTask». Подключите
 системные сборки: Etl, Metabase. Указанный пример является обработчиком
 события OnCreate формы.


	Sub ETLBOX_SAMPLEFormOnCreate(Sender: Object; Args: IEventArgs);

	Var

	    MB: IMetabase;

	Begin

	    MB := MetabaseClass.Active;

	    UiEtlObject1.EtlTask := MB.ItemById("ETLTask").Bind As IEtlTask;

	    UiEtlObject1.Active := True;

	    EtlBox1.Source := UiEtlObject1 As IEtlSource;

	    EtlObjectPanelBox1.EtlBox := EtlBox1;

	    EtlObjectPanelBox1.ShowOthers := False;

	    EtlObjectPanelBox1.ShowMaps := False;

	End Sub ETLBOX_SAMPLEFormOnCreate;


При запуске формы будет осуществлена настройка и подключение всех компонентов,
 предназначенных для работы с задачей ETL:


	- для «UiEtlObject1» будет указана задача ETL репозитория, с которой
	 будет осуществляться работа;


	- для «EtlBox1» в качестве источника данных будет задан компонент
	 UiEtlObject1;


	- для «EtlObjectPanelBox1» будет указан компонент «EtlBox1», на
	 рабочее пространство которого можно будет добавлять новые коннекторы.
	 Панели «Преобразователи» и «Другие» будут скрыты.


См. также:


[IUiEtlObject](IUiEtlObject.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
