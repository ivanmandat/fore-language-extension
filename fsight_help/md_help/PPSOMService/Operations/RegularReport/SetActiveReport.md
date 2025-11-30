# SetActiveReport: Операция

SetActiveReport: Операция
-


**


# SetActiveReport


## Синтаксис


bool SetActiveReport(PrxId tPrx, bool isActive)


## Параметры


tPrx. Моникёр
 открытого экземпляра регламентного отчёта.


isActive. Признак активности
 отчёта в рамках текущей сессии.


## Описание


Операция SetActiveReport устанавливает
 активный регламентный отчёт для текущей сессии пользователя.


## Комментарии


Актуально, если из регламентных отчётов с помощью пользовательских кнопок
 вызваются веб-формы. При использовании нескольких веб-форм, вызванных
 из разных отчётов, в рамках одной сессии активным отчётом будет установлен
 тот, из которого произошёл последний вызов веб-формы вплоть до её закрытия.
 Активный отчёт возвращает статическое свойство [PrxReport.ActiveReport](KeReport.chm::/Interface/IPrxReportClass/IPrxReportClass.ActiveReport.htm),
 доступное в языке Fore. При наличии нескольких одновременно открытых регламентных
 отчётов и веб-форм данное свойство может отработать некорректно, так как
 вернёт последний отчёт, из которого открывалась веб-форма.


Операция SetActiveReport позволяет
 изменить активный отчёт, если это требуется выполнить до закрытия веб-форм.
 Для выполнения операции укажите в поле tPrx
 моникёр отчёта, который необходимо сделать активным. Моникёр может быть
 получен при выполнении операции [OpenPrx](OpenPrx.htm) или
 [OpenPrxMeta](OpenPrxMeta.htm). В поле isActive
 установите значение true.


Результатом выполнения операции будет логическое значение true,
 если установка активного регламентного отчёта завершилась успешно.


## Пример


Ниже приведён пример установки активного регламентного отчёта в рамках
 текущей сессии пользователя. В запросе передаётся моникёр открытого экземпляра
 регламентного отчёта. В ответе возвращается признак успешного изменения
 активного отчёта.


	 SOAP
	  JSON  C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<SetActiveReport xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tPrx xmlns="****">
  <id>EIHAOHKCIDICGOAEACIOGPBBNHOGGKOEGJNOOFOKLGCODGAI!M!S!PCDPDMPKCIDICGOAEDCJBGJKCPILDLOEEMJPIECIKDFBDMFPO</id>  </tPrx>
  <isActive xmlns="****">true</isActive>  </SetActiveReport>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
  <SetActiveReportResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">1</SetActiveReportResult>  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "SetActiveReport" :
  {
   "tPrx" :
    {
     "id" : "EIHAOHKCIDICGOAEACIOGPBBNHOGGKOEGJNOOFOKLGCODGAI!M!S!PCDPDMPKCIDICGOAEDCJBGJKCPILDLOEEMJPIECIKDFBDMFPO"
    },
   "isActive" : "true"
  }
}

### JSON-ответ:


{
 "SetActiveReportResult" : "1"
}


public static bool SetActiveReport(string moniker)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tSet = new SetActiveReport()
    {
        tPrx = new PrxId() { id = moniker },
        isActive = true
    };
    // Установка активного регламентного отчёта
    var result = somClient.SetActiveReport(tSet);
    return result;
}


См. также:


[Работа
 с регламентными отчётами](RegularReport_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
