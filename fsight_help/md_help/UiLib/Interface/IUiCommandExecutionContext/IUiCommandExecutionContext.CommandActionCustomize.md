# IUiCommandExecutionContext.CommandActionCustomize

IUiCommandExecutionContext.CommandActionCustomize
-


# IUiCommandExecutionContext.CommandActionCustomize


## Синтаксис


CommandActionCustomize: [IUiCommandActionCustomize](../IUiCommandActionCustomize/IUiCommandActionCustomize.htm);


## Описание


Свойство CommandActionCustomize
 возвращает настройки для действий, которые доступны у объекта репозитория
 при его открытии на просмотр или редактирование.


## Комментарии


Свойство возвращает коллекцию настроек действий, которые будут доступны
 для объекта репозитория. По умолчанию данная коллекция пуста, при этом
 параметры действий определяются системными настройками платформы по каждому
 типу объектов в отдельности. Параметры действий, определенные в данном
 свойстве, имеют более высокий приоритет чем параметры, определенные в
 свойстве [IWinApplication.CommandActionCustomize](../IWinApplication/IWinApplication.CommandActionCustomize.htm),
 но распространяются только на тот объект, для которого выполняется [команда](../IUiCommandTarget/IUiCommandTarget.Execute.htm).


В текущей реализации настройка параметров действий доступна для следующих
 объектов репозитория:


	- Экспресс-отчеты;


	- Регламентные отчеты;


	- Аналитические панели.


## Пример


Для выполнения примера предполагается наличие в репозитории экспресс-отчета
 с идентификатором «EXPRESS_REPORT».


Добавьте ссылки на системные сборки: Metabase, UI.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MDesc: IMetabaseObjectDescriptor;

	    Target: IUiCommandTarget;

	    Context: IUiCommandExecutionContext;

	    CommandCust: IUiCommandActionCustomize;

	    Action: IUiCommandAction;

	Begin

	    MB := MetabaseClass.Active;

	    //Описание объекта

	    MDesc := MB.ItemById("EXPRESS_REPORT");

	    Target := WinApplication.Instance.GetObjectTarget(MDesc);

	    //Дополнительные настройки для выполнения команд

	    Context := Target.CreateExecutionContext;

	    //Параметры действий

	    CommandCust := Context.CommandActionCustomize;

	    Action := CommandCust.Add("Open");

	    Action.Enabled := False;

	    Action.Visible := True;

	    Action := CommandCust.Add("OpenFile");

	    Action.Enabled := False;

	    Action.Visible := True;

	    Action := CommandCust.Add("Save");

	    Action.Enabled := False;

	    Action.Visible := True;

	    Action := CommandCust.Add("Express.Mapselection");

	    Action.Visible := False;

	    //Открытие объекта с заданными параметрами

	    Target.Execute("Object.Open", Context);

	End Sub UserProc;


При выполнении примера будет осуществлено открытие на просмотр указанного
 экспресс-отчета. Перед открытием будут определены параметры для ряда действий,
 которые доступны в экспресс-отчете. В открытом отчете будут присутствовать,
 но будут недоступны для выполнения команды сохранения и открытия экспресс-отчетов.
 Также будет отсутствовать команда для изменения используемой карты.


См. также:


[IUiCommandExecutionContext](IUiCommandExecutionContext.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
