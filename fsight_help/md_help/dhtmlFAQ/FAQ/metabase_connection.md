# Создание соединения с репозиторием

Создание соединения с репозиторием
-


# Создание соединения с репозиторием


Для создания соединения с репозиторием:


1. Убедитесь, что выполнены все пункты инструкции «[Создание веб-приложения](dhtml.chm::/Web_application_creation.htm)»;


2. Добавьте на HTML-странице размещаемого компонента в теге SCRIPT код
 для создания соединения с репозиторием и его открытия:


var waiter = new PP.Ui.[Waiter](dhtmlUi.chm::/Classes/Waiter/Waiter.htm)();//Компонент Waiter, который будет отображаться во время соединения с репозиторием
metabase = new PP.Mb.Metabase({
      [PPServiceUrl](dhtmlMetabase.chm::/Classes/Metabase/PPService/PPService.PPServiceUrl.htm): "PPService.axd?action=proxy",//URL-адрес до обработчиков запросов веб-сервера с указанием операции «Проксирование»
      [Id](dhtmlCommon.chm::/Classes/Object/Object.Id.htm): "WAREHOUSE",//Идентификатор репозитория, к которому будет осуществляться подключение
      [UserCreds](dhtmlMetabase.chm::/Classes/Metabase/UserCreds/UserCreds.htm): {//Учетные данные для входа в репозиторий
         [UserName](dhtmlMetabase.chm::/Classes/Metabase/UserCreds/UserCreds.UserName.htm): "user",//Имя пользователя
         [Password](dhtmlMetabase.chm::/Classes/Metabase/UserCreds/UserCreds.Password.htm): "password"//Пароль
      },
      //В начале запроса на соединение с репозиторием отобразим на странице компонент Waiter
      [StartRequest](dhtmlMetabase.chm::/Classes/Metabase/PPService/PPService.StartRequest.htm): function () {
         waiter.show();
      },
      //При окончании запроса на соединение с репозиторием скроем компонент Waiter
      [EndRequest](dhtmlMetabase.chm::/Classes/Metabase/PPService/PPService.EndRequest.htm): function () {
         waiter.hide();
         //При окончании выполнения запроса все запросы удаляются из кеша
         metabase.[clearCache](dhtmlMetabase.chm::/Classes/Metabase/Metabase/Metabase.clearCache.htm)();
      },
      //При ошибке на экране появится сообщение с текстом ошибки
      [Error](dhtmlMetabase.chm::/Classes/Metabase/PPService/PPService.Error.htm): function (sender, args) {
         alert(args.ResponseText);
      }
   });
metabase.[open](dhtmlMetabase.chm::/Classes/Metabase/Metabase/Metabase.open.htm)(); //открываем репозиторий


3. Создайте сервис для работы с инструментом продукта «Форсайт. Аналитическая платформа».
 Сервисы реализованы следующими классами:


	- [EaxMdService](dhtmlExpress.chm::/Classes/Express/EaxMdService/EaxMdService.htm).
	 Сервис для работы с экспресс-отчетами;


	- [PrxMdService](dhtmlReport.chm::/Classes/RegularReport/PrxMdService/PrxMdService.htm).
	 Сервис для работы с регламентными отчетами;


	- [TSService](dhtmlTS.chm::/Classes/TimeSeries/TSService/TSService.htm).
	 Сервис для работы с рабочими книгами;


	- [DimSrv](dhtmlDim.chm::/Classes/Metabase/DimSrv/DimSrv.htm).
	 Сервис для работы с измерениями.


Пример создания сервиса для работы с экспресс-отчетами:


var
 eaxMbService = new
 PP.Exp.EaxMdService({


    [Metabase](dhtmlExpress.chm::/Classes/Express/EaxMdService/EaxMdService.getMetabase.htm):
 metabase


  });


4. Откройте объект репозитория на редактирование или просмотр. При этом
 будет создан объект одного из следующих классов:


	- [EaxAnalyzer](dhtmlExpress.chm::/Classes/Express/EaxAnalyzer/EaxAnalyzer.htm).
	 Модель экспресс-отчета;


	- [Report](dhtmlReport.chm::/Classes/RegularReport/Report/Report.htm).
	 Модель регламентного отчета;


	- [Workbook](dhtmlTS.chm::/Classes/TimeSeries/Workbook/Workbook.htm).
	 Модель рабочей книги;


	- [DimSource](dhtmlDim.chm::/Classes/Metabase/DimSource/DimSource.htm).
	 Модель измерения.


Пример открытия экспресс-отчета на редактирование:


var
 eaxAnalyzer = eaxMbService.editDocument(100);


100 - ключ открываемого экспресс-отчета.


5. Добавьте код для размещения нужного компонента,
 см. раздел «[DHTML-компоненты](dhtml.chm::/DHTML_components.htm)».


См. также:


[Пример
 создания компонента WorkbookBox](dhtmlTS.chm::/Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm) | [Пример
 размещения компонента ReportBox](dhtmlReport.chm::/Components/RegularReport/ReportBox/ReportBox_Example.htm) | [Пример
 создания компонента ExpressBox](dhtmlExpress.chm::/Components/Express/ExpressBox/ExpressBox_Example.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
