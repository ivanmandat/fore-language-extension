# RestoreOlapState: Операция

RestoreOlapState: Операция
-


**


# RestoreOlapState


## Синтаксис


bool RestoreOlapState(string mon)


## Параметры


mon. Строковое
 представление моникёра для работы с основой таблицы.


## Описание


Операция RestoreOlapState осуществляет
 возврат к исходному состоянию в таблице экспресс-отчёта после того, как
 была применена детализация/обобщение.


## Комментарии


Для выполнения операции укажите в поле mon
 моникёр экземпляра экспресс-отчёта с постфиксом «!Sheets!ключ_листа!Pivot».
 Моникёр можно получить, используя операцию [OpenEax](OpenEax.htm).


Результатом операции будет логическое значение true,
 если возврат к исходному состоянию в таблице завершился успешно.


## Пример


Ниже приведён пример проверки возврата к исходному состоянию в таблице
 экспресс-отчёта после детализации/обобщения данных. В запросе передаётся
 моникёр для работы с основой таблицы. В ответе возвращается признак успешного
 возврата к исходному состоянию.


	 SOAP
	  JSON  C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<RestoreOlapState xmlns="**http://www.fsight.ru/PP.SOM.Som**">
  <mon xmlns="****">AOJCKFNGPEEEGOAEIKMCGPAHDIBGIBFEPKIHPJOIEJAKPMLE!M!S!EIHNGHJNGPEEEGOAELIEODEFLIHBECCBEOLAOPCEKLDFOIECA!Sheets!18158!Pivot</mon>  </RestoreOlapState>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
  <RestoreOlapStateResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">1</RestoreOlapStateResult>  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "RestoreOlapState" :
  {
   "mon" : "AOJCKFNGPEEEGOAEIKMCGPAHDIBGIBFEPKIHPJOIEJAKPMLE!M!S!EIHNGHJNGPEEEGOAELIEODEFLIHBECCBEOLAOPCEKLDFOIECA!Sheets!18158!Pivot"
  }
}

### JSON-ответ:


{
 "RestoreOlapStateResult" : "1"
}


public static bool RestoreOlapState(string moniker, string sheetKey)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tSet = new RestoreOlapState()
    {
        mon = moniker + "!Sheets!" + sheetKey + "!Pivot"
    };
    // Возврат к исходному состоянию в таблице
    var result = somClient.RestoreOlapState(tSet);
    return result;
}


См. также:


[Работа
 с экспресс-отчётами](ExpressReport_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
