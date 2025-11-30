# ChangeTabNamedRegion: Операция

ChangeTabNamedRegion: Операция
-


**


# ChangeTabNamedRegion


## Синтаксис


TabNamedRegionOpResult ChangeTabNamedRegion(NamedRegionsId
 nrMon, ChangeTabRegionArg Arg)


## Параметры


nrMon. Моникёр
 для работы с именованными диапазонами.


Arg. Параметры выполнения операции.


## Описание


Операция ChangeTabNamedRegion
 изменяет именованный диапазон таблицы.


## Комментарии


Для выполнения операции укажите в поле nrMon
 моникёр экземпляра регламентного отчёта с постфиксом «!Sheets!Ключ
 листа!NamedRegions», а в поле Arg
 параметры изменения именованного диапазона. Моникёр может быть получен
 при выполнении операции [OpenPrxMeta](OpenPrxMeta.htm).


Результатом выполнения операции будет информация об успешном изменении
 именованного диапазона.


## Пример


Ниже приведён пример изменения именованного диапазона. В запросе передаётся
 моникёр для работы с именованными диапазонами, наименование изменяемого
 диапазона и новые настройки. В ответе возвращается признак успешного изменения
 и новое наименование именованного диапазона.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<ChangeTabNamedRegion xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<nrMon xmlns="****">
  <id>ILBNJNHKDBCAGOAEGGMCAJHIOKJPOKMEOIOADBDOFONILPAG!M!S!PAJBBFBIKDBCAGOAEJOAGHLNCNALCNCJEOLBLLFIDBFHIGLPO!Sheets!1!NamedRegions</id>  </nrMon>
[![](../../minus.gif)](../../#)<Arg xmlns="****">
[![](../../minus.gif)](../../#)<ids>
  <name>Данные</name>  </ids>
[![](../../minus.gif)](../../#)<reg>
  <left>1</left>  <top>11</top>  <width>10</width>  <height>12</height>  <name>Итоги</name>  </reg>
  </Arg>
  </ChangeTabNamedRegion>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<ChangeTabNamedRegionResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
  <res xmlns="****">1</res>  <name xmlns="****">Итоги</name>  </ChangeTabNamedRegionResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "ChangeTabNamedRegion" :
  {
   "nrMon" :
    {
     "id" : "ILBNJNHKDBCAGOAEGGMCAJHIOKJPOKMEOIOADBDOFONILPAG!M!S!PAJBBFBIKDBCAGOAEJOAGHLNCNALCNCJEOLBLLFIDBFHIGLPO!Sheets!1!NamedRegions"
    },
   "Arg" :
    {
     "ids" :
      {
       "name" : "Данные"
      },
     "reg" :
      {
       "left" : "1",
       "top" : "11",
       "width" : "10",
       "height" : "12",
       "name" : "Итоги"
      }
    }
  }
}

### JSON-ответ:


{
 "ChangeTabNamedRegionResult" :
  {
   "res" : "1",
   "name" : "Итоги"
  }
}


public static TabNamedRegionOpResult ChangeTabNamedRegion(string moniker, string changedRegionName, string newName, int leftCell, int topCell, uint bottomCell, uint rightCell)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tChange = new ChangeTabNamedRegion()
    {
        nrMon = new NamedRegionsId() { id = moniker + "!Sheets!1!NamedRegions" },
        Arg = new ChangeTabRegionArg()
        {
            ids = new TabRegionIdentArg()
            {
                name = changedRegionName
            },
            reg = new TabNamedRegion()
            {
                left = leftCell,
                top = topCell,
                height = bottomCell,
                width = rightCell,
                name = newName
            }
        }
    };
    // Изменение именованного диапазона
    var result = somClient.ChangeTabNamedRegion(tChange);
    return result;
}


См. также:


[Работа
 с регламентными отчётами](RegularReport_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
