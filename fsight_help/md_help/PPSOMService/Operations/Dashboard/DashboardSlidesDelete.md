# DashboardSlidesDelete: Операция

DashboardSlidesDelete: Операция
-


**


# DashboardSlidesDelete


## Синтаксис


bool DashboardSlidesDelete(string mon, DashboardSlide
 tArg)


## Параметры


mon. Моникёр
 для работы со слайдами информационной панели.


tArg. Параметры выполнения
 операции.


## Описание


Операция DashboardSlidesDelete
 удаляет слайд из информационной панели.


## Комментарии


Для выполнения операции укажите в поле mon
 моникёр открытого экземпляра информационной панели с постфиксом «!Slides», а в поле tArg.k
 ключ удаляемого слайда. Моникёр может быть получен при выполнении операции
 [OpenDashboard](OpenDashboard.htm).


Результатом выполнения операции будет логическое значение true,
 если удаление слайда завершилось успешно.


## Пример


Ниже приведён пример удаления слайда из информационной панели. В запросе
 передаётся моникёр для работы со слайдами и ключ удаляемого слайда. В
 ответе возвращается признак успешного удаления слайда.


	 SOAP
	  JSON  C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<DashboardSlidesDelete xmlns="**http://www.fsight.ru/PP.SOM.Som**">
  <mon xmlns="****">NPIEIDPOHJAFGOAELKELIPCKGACGDODEJKMKLMAKBEHEPNNL!M!S!PNNJOPHPOHJAFGOAEICILHADAKIJGHMLEMLEPKLENIMMHAMNE!Slides</mon>[![](../../minus.gif)](../../#)<tArg xmlns="****">
  <k>3</k>  </tArg>
  </DashboardSlidesDelete>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
  <DashboardSlidesDeleteResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">1</DashboardSlidesDeleteResult>  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "DashboardSlidesDelete" :
  {
   "mon" : "NPIEIDPOHJAFGOAELKELIPCKGACGDODEJKMKLMAKBEHEPNNL!M!S!PNNJOPHPOHJAFGOAEICILHADAKIJGHMLEMLEPKLENIMMHAMNE!Slides",
   "tArg" :
    {
     "k" : "3"
    }
  }
}

### JSON-ответ:


{
 "DashboardSlidesDeleteResult" : "1"
}


public static bool DashboardSlidesDelete(string moniker, uint slideKey)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tDel = new DashboardSlidesDelete()
    {
        tArg = new DashboardSlide()
        {
            k = slideKey
        },
        // Моникёр для работы со слайдами информационной панели
        mon = moniker + "!Slides"
    };
    // Удаление слайда
    var result = somClient.DashboardSlidesDelete(tDel);
    return result;
}


См. также:


[Работа
 с информационными панелями](DashboardOperations.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
