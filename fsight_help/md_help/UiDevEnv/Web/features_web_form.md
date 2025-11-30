# Особенности работы веб-форм

Особенности работы веб-форм
-


# Особенности работы веб-форм


	Из-за используемых технологий и имеющихся ограничений разработки
	 возникает ряд особенностей, которые необходимо учитывать при использовании
	 веб-форм. Список особенностей представлен ниже.


## Веб-формы и кластер BI-серверов


	Если для разрабатываемого веб-приложения формируется инфраструктура,
	 содержащая [кластер
	 BI-серверов](Setup.chm::/UiWebSetup/01_BIServer/Cluster/Cluster_Of_BI_Server.htm), то для корректной работы веб-форм
	 в многопользовательском режиме потребуется дополнительная [настройка
	 балансировщика](Setup.chm::/UiWebSetup/01_BIServer/Cluster/HAProxy_settings.htm) HAProxy.


## Использование веб-форм в регламентных отчётах


	Если по пользовательской кнопке открывается веб-форма, то в системе
	 в рамках пользовательской сессии фиксируется активный регламентный
	 отчёт. Активный отчёт возвращает статическое свойство [PrxReport.ActiveReport](KeReport.chm::/Interface/IPrxReportClass/IPrxReportClass.ActiveReport.htm),
	 доступное в языке Fore. При использовании нескольких веб-форм, вызванных
	 из разных отчётов, в рамках одной сессии активным отчётом будет установлен
	 тот, из которого произошёл последний вызов веб-формы вплоть до её
	 закрытия.


	При наличии нескольких одновременно открытых регламентных отчётов
	 и веб-форм свойство [PrxReport.ActiveReport](KeReport.chm::/Interface/IPrxReportClass/IPrxReportClass.ActiveReport.htm)
	 может отработать некорректно, так как вернёт последний отчёт, из которого
	 открывалась веб-форма. Изменить активный отчёт можно с помощью операции
	 [SetActiveReport](PPSOMService.chm::/Operations/RegularReport/SetActiveReport.htm).


	Для работы с отчётом из веб-формы рекомендуется сохранять активный
	 отчёт в глобальную переменную, объявленную на уровне класса веб-формы.
	 Запись активного отчёта в переменную осуществлять в событии onShow:


		Class TESTWebForm: WebForm

		    activeRep: IPrxReport;

		    activeSheet: IPrxSheet;


		    Sub TESTWebFormOnShow;

		    Begin

		        activeRep := PrxReport.ActiveReport;

		        activeSheet := activeRep.ActiveSheet;

		        // Дальнейшая работа с отчётом

		    End Sub TESTWebFormOnShow;

		End Class TESTWebForm;


## Использование веб-форм для обработки
	 операций пользовательских классов


	В веб-приложении для [операций](../04_NavigatorSetting/Classes_Object/User_Class_Operation.htm)
	 пользовательских классов в качестве обработчиков могут быть назначены
	 веб-формы. Для таких веб-форм в обработчик события OnShow может быть
	 добавлен дополнительный параметр: OnShow(Args: ISortedList). При выполнении
	 операции в аргументах события Args будут доступны элементы со следующими
	 ключами:


		- Values. Содержит
		 значения параметров, переданных для выполнения операции. Тип значения
		 - [IMetabaseObjectParamValues](KeSom.chm::/Interface/IMetabaseObjectParamValues/IMetabaseObjectParamValues.htm);


		- Descriptor. Описание
		 объекта пользовательского класса, для которого выполняется операция.
		 Тип значения - [IMetabaseObjectDescriptor](KeSom.chm::/Interface/IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.htm);


		- Operation. Наименование
		 выполняемой операции. Тип значения - String.


	Данные элементы позволяют получить доступ к объекту пользовательского
	 класса и организовать необходимую работу с использованием всех доступных
	 компонентов и визуального интерфейса веб-форм.


	Пример класса веб-формы, предназначенной для обработки операций
	 пользовательского класса:


		Class TESTWebForm: WebForm

		    bSave: WebButton;

		    bClose: WebButton;

		    MDesc: IMetabaseObjectDescriptor;


		    Sub TESTWebFormOnShow(Args: ISortedList);

		    Var

		        Descr: IMetabaseObjectDescriptor;

		        ParamVals: IMetabaseObjectParamValues;

		        Operation: String;

		    Begin

		        Descr := Args.Item("Descriptor");

		        ParamVals := Args.Item("Values");

		        Operation := Args.Item("Operation");

		        MDesc := Descr;

		    End Sub TESTWebFormOnShow;


		    Sub bSaveOnClick;

		    Begin

		        MDesc.SaveDescriptor;

		        Self.Close;

		    End Sub bSaveOnClick;


		    Sub bCloseOnClick;

		    Begin

		        Dispose MDesc;

		        Self.Close;

		    End Sub bCloseOnClick;

		End Class TESTWebForm;


См. также:


[Создание
 веб-формы и размещение компонентов](../01_Development_Environment/02_Work_in_Development_Environment/DevEnv_Object/Web_Form.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
