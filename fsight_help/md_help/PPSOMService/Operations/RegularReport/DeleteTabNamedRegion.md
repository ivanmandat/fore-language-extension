# DeleteTabNamedRegion: Операция

DeleteTabNamedRegion: Операция
-


**


# DeleteTabNamedRegion


## Синтаксис


bool DeleteTabNamedRegion(NamedRegionsId nrMon,
 TabRegionIdentArg Arg)


## Параметры


nrMon. Моникёр
 для работы с именованными диапазонами.


Arg. Параметры выполнения операции.


## Описание


Операция DeleteTabNamedRegion
 удаляет именованный диапазон с листа регламентного отчёта.


## Комментарии


Для выполнения операции укажите в поле nrMon
 моникёр экземпляра регламентного отчёта с постфиксом «!Sheets!Ключ
 листа!NamedRegions», а в поле Arg
 параметры удаления именованного диапазона. Моникёр может быть получен
 при выполнении операции [OpenPrxMeta](OpenPrxMeta.htm).


Результатом выполнения операции будет логическое значение True,
 если удаление именованного диапазона завершилось успешно.


## Пример


Ниже приведён пример удаления именованного диапазона. В запросе передаётся
 моникёр для работы с именованными диапазонами и наименование удаляемого
 диапазона. В ответе возвращается признак успешного удаления.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<DeleteTabNamedRegion xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<nrMon xmlns="****">
  <id>ILBNJNHKDBCAGOAEGGMCAJHIOKJPOKMEOIOADBDOFONILPAG!M!S!PAJBBFBIKDBCAGOAEJOAGHLNCNALCNCJEOLBLLFIDBFHIGLPO!Sheets!1!NamedRegions</id>  </nrMon>
[![](../../minus.gif)](../../#)<Arg xmlns="****">
  <name>Итоги</name>  </Arg>
  </DeleteTabNamedRegion>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
  <DeleteTabNamedRegionResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">1</DeleteTabNamedRegionResult>  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "DeleteTabNamedRegion" :
  {
   "nrMon" :
    {
     "id" : "ILBNJNHKDBCAGOAEGGMCAJHIOKJPOKMEOIOADBDOFONILPAG!M!S!PAJBBFBIKDBCAGOAEJOAGHLNCNALCNCJEOLBLLFIDBFHIGLPO!Sheets!1!NamedRegions"
    },
   "Arg" :
    {
     "name" : "Итоги"
    }
  }
}

### JSON-ответ:


{
 "DeleteTabNamedRegionResult" : "1"
}


public static bool DeleteTabNamedRegion(string moniker, string deletedRegionName)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tDel = new DeleteTabNamedRegion()
    {
        nrMon = new NamedRegionsId() { id = moniker + "!Sheets!1!NamedRegions" },
        Arg = new TabRegionIdentArg()
        {
            name = deletedRegionName
        }
    };
    // Удаление именованного диапазона
    var result = somClient.DeleteTabNamedRegion(tDel);
    return result;
}


См. также:


[Работа
 с регламентными отчётами](RegularReport_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
