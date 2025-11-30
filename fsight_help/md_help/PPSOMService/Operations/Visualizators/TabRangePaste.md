# TabRangePaste: Операция

TabRangePaste: Операция
-


**


# TabRangePaste


## Синтаксис


TabRangePasteResult TabRangePaste(string mon, TabRangePasteArg
 tArg)


## Параметры


mon. Моникёр
 для работы с диапазоном ячеек таблицы.


tArg. Параметры вставки диапазона
 ячеек.


## Описание


Операция TabRangePaste вставляет
 скопированные данные в диапазон ячеек.


## Комментарии


Операция позволяет вставить в диапазон ячеек данные, которые ранее были
 скопированы/вырезаны с помощью операций [TabRangeCopy](TabRangeCopy.htm)/[TabRangeCut](TabRangeCut.htm). Для выполнения операции укажите
 в поле mon моникёр экземпляра
 регламентного отчёта с постфиксом «!Sheets!ключ
 листа!адрес диапазона», определяющим диапазон ячеек, в который
 осуществляется вставка. В поле tArg
 задайте режим вставки и вставляемые данные.


Результатом операции будет информация о результатах вставки данных.


## Пример


Ниже приведён пример вставки скопированного/вырезанного диапазона ячеек.
 В запросе передаётся моникёр диапазона, куда осуществляется вставка, поток,
 содержащий вставляемые данные и режим вставки - текст, формулы и оформление.
 В ответе возвращается результат вставки данных.


	 SOAP
	  JSON  C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<TabRangePaste xmlns="**http://www.fsight.ru/PP.SOM.Som**">
  <mon xmlns="****">MGKDPJABAJEGGOAELIOKBIDEHDDAAAGEAJBDEOOOILGAFOPC!M!S!PEBIIJIBBAJEGGOAEEAPOAFJCAOCEDKJEEIODGHNJHMCAIENH!Sheets!1!G0:H3</mon>[![](../../minus.gif)](../../#)<tArg xmlns="****">
[![](../../minus.gif)](../../#)<data>
[![](../../minus.gif)](../../#)<it type="**1**">
  <data>ewAAAAMAAAB4nN2UzQ3CMAyFX5z0Z58OgLpJuSAhcWIBypEtmIAZGAAxEhAndgmpEMfSWnLb2G7ir091d7+c4I0QzYrz2iGxGwp/bbHHFmvsONTWQB+SPtUPi/Pm2jTNKnXdxDy94Ytx7tDhEZ/i4aYi3nd4zeQBygM2C5j0CNLI0ZAJONLXvPGU0SZ4tAw8ReN7qp4VPBOKuPifCdRTgZwQFKFoSg2QE2BMQNI4b8rNflbo9KBMpWI2KikfZSqVQuAmVqmkXyrpt9fJPVbJSgM635WxwiJGhcX7J0slrAUvSDyhhA4jCbOKFxefe7U=</data>  </it>
  </data>
  <mode>15</mode>  </tArg>
  </TabRangePaste>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<TabRangePasteResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
  <result xmlns="****">0</result>  </TabRangePasteResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "TabRangePaste" :
  {
   "mon" : "MGKDPJABAJEGGOAELIOKBIDEHDDAAAGEAJBDEOOOILGAFOPC!M!S!PEBIIJIBBAJEGGOAEEAPOAFJCAOCEDKJEEIODGHNJHMCAIENH!Sheets!1!G0:H3",
   "tArg" :
    {
     "data" :
      {
       "it" :
        {
         "@type" : "1",
         "data" : "ewAAAAMAAAB4nN2UzQ3CMAyFX5z0Z58OgLpJuSAhcWIBypEtmIAZGAAxEhAndgmpEMfSWnLb2G7ir091d7+c4I0QzYrz2iGxGwp\/bbHHFmvsONTWQB+SPtUPi\/Pm2jTNKnXdxDy94Ytx7tDhEZ\/i4aYi3nd4zeQBygM2C5j0CNLI0ZAJONLXvPGU0SZ4tAw8ReN7qp4VPBOKuPifCdRTgZwQFKFoSg2QE2BMQNI4b8rNflbo9KBMpWI2KikfZSqVQuAmVqmkXyrpt9fJPVbJSgM635WxwiJGhcX7J0slrAUvSDyhhA4jCbOKFxefe7U="
        }
      },
     "mode" : "15"
    }
  }
}

### JSON-ответ:


{
 "TabRangePasteResult" :
  {
   "result" : "0"
  }
}


public static TabRangePasteResult PasteTabRange(string moniker, string sheetKey, string address, TabRangeClipboardItem[] pasteData)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операции
    // Параметры выполнения операции
    var tTab = new TabRangePaste()
    {
        mon = moniker + "!Sheets!" + sheetKey + '!' + address,
        tArg = new TabRangePasteArg()
        {
            mode = 15,
            data = pasteData
        }
    };
    // Вставка диапазона ячеек
    var result = somClient.TabRangePaste(tTab);
    return result;
}


См. также:


[Таблица](Table/tabsheet_list.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
