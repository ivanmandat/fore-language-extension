# InsertPrxShape: Операция

InsertPrxShape: Операция
-


**


# InsertPrxShape


## Синтаксис


InsertPrxShapeResult InsertPrxShape(string mon,
 PrxShapeInsertArgs tArg)


## Параметры


mon. Моникёр
 листа регламентного отчёта.


tArg. Параметры выполнения
 операции.


## Описание


Операция InsertPrxShape вставляет
 фигуру на лист регламентного отчёта.


## Комментарии


Для выполнения операции укажите в поле mon
 моникёр в формате «Моникёр экземпляра
 рег.отчёта!Sheets!Ключ листа», а в поле tArg
 параметры добавляемой фигуры. Моникёр экземпляра регламентного отчёта
 может быть получен при выполнении операции [OpenPrxMeta](OpenPrxMeta.htm).


Результатом операции будет идентификатор вставленной фигуры.


## Пример


Ниже приведён пример вставки на лист отчёта скруглённого прямоугольника.
 В запросе передаётся моникёр листа и параметры вставки прямоугольника.
 В ответе возвращается идентификатор созданной фигуры.


	 SOAP
	  JSON  C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<InsertPrxShape xmlns="**http://www.fsight.ru/PP.SOM.Som**">
  <mon xmlns="****">GAGEIOLDDJHBGOAEANJEBOBFBHGHAOJELKJLBCDMBBELJEGN!M!S!PDLHLCDMDDJHBGOAEKHDDNCJBEGLGDBHEFJGHJDPCONMFKBND!Sheets!1</mon>[![](../../minus.gif)](../../#)<tArg xmlns="****">
  <type>4</type>[![](../../minus.gif)](../../#)<placement>
  <l>1</l>  <t>1</t>  <r>4</r>  <b>4</b>  </placement>
  </tArg>
  </InsertPrxShape>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<InsertPrxShapeResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
  <id xmlns="****">PrxShape1</id>  </InsertPrxShapeResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "InsertPrxShape" :
  {
   "mon" : "GAGEIOLDDJHBGOAEANJEBOBFBHGHAOJELKJLBCDMBBELJEGN!M!S!PDLHLCDMDDJHBGOAEKHDDNCJBEGLGDBHEFJGHJDPCONMFKBND!Sheets!1",
   "tArg" :
    {
     "type" : "4",
     "placement" :
      {
       "l" : "1",
       "t" : "1",
       "r" : "4",
       "b" : "4"
      }
    }
  }
}

### JSON-ответ:


{
 "InsertPrxShapeResult" :
  {
   "id" : "PrxShape1"
  }
}


public static InsertPrxShapeResult InsertPrxShape(string moniker, uint sheetKey)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tAdd = new InsertPrxShape()
    {
        tArg = new PrxShapeInsertArgs()
        {
            type = 4, // Скруглённый прямоугольник
            placement = new TabObjectCoordsPix()
            {
                l = 1,
                t = 1,
                r = 4,
                b = 4
            }
        },
        mon = moniker + "!Sheets!" + sheetKey
    };
    // Вставка фигуры на лист отчёта
    var result = somClient.InsertPrxShape(tAdd);
    return result;
}


См. также:


[Работа
 с регламентными отчётами](RegularReport_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
