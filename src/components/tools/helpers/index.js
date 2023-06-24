export const formatMoney = (value) => {   
    return `Rs ${Intl.NumberFormat().format(value)}`;
};
// this specifies the format in which money is displayed